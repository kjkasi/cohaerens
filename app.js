var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const Ensure = require('connect-ensure-login');

mongoose.connect('mongodb+srv://admin:admin@cluster0-jbzv7.azure.mongodb.net/cohaerens?retryWrites=true&w=majority', {useNewUrlParser: true});
require('./models/freq');
require('./models/place');
require('./models/syscom');
require('./models/user');
require('./models/recv');
require('./models/tec');

const Place = mongoose.model('Place');
const SysCom = mongoose.model('SysCom');
const Freq = mongoose.model('Freq');
const User = mongoose.model('User');


const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
//const flash = require('connect-flash');

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (user.password != password) { return done(null, false); }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user){
    if (err) console.log(err);
    done(err, user);
  })
});

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');
const placeRouter = require('./routes/place');
const syscomRouter = require('./routes/syscom');
const freqRouter = require('./routes/freq');
const dataRouter = require('./routes/data');
const recvRouter = require('./routes/recv');
const apiRouter = require('./routes/api');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

var app = express();

const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({ limit: '10mb', type: '*/*' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(session({
  secret: 'mojietu',
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 3600000 //1 hour = 60 minutes = 60 × 60 seconds = 3600 seconds = 3600 × 1000 milliseconds = 3,600,000 ms.
    //maxAge: 60000 // 1 minute
  },
  store: new MongoStore({mongooseConnection: mongoose.connection}),
}));

app.use(passport.initialize());
app.use(passport.session());
//app.use(flash());

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/place', placeRouter);
app.use('/syscom', syscomRouter);
app.use('/freq', freqRouter);
app.use('/data', dataRouter);
app.use('/recv', recvRouter);
app.use('/api', apiRouter);

/*
app.get('/flash', function(req, res){
  // Set a flash message by passing the key, followed by the value, to req.flash().
  req.flash('info', 'Flash is back!')
  res.redirect('/');
});
*/

app.post('/login', 
  passport.authenticate('local', {  successRedirect: '/',
                                    failureRedirect: '/login'})
);

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.get('/authorize', passport.authorize('local', { failureRedirect: '/login'}), function(req, res){
  console.log('GET authorize');
  res.render('info', {
    result: req.user
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
