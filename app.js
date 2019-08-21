var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var models = require('./models');
var bodyParser = require('body-parser');
var session = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(session.Store);

var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var placeRouter = require('./routes/place');
var syscomRouter = require('./routes/syscom');
var freqRouter = require('./routes/freq');
var dataRouter = require('./routes/data');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'mojietu',
  saveUninitialized: false,
  resave: false,
  cookie: {
    //maxAge: 3600000 //1 hour = 60 minutes = 60 × 60 seconds = 3600 seconds = 3600 × 1000 milliseconds = 3,600,000 ms.
    maxAge: 60000 // 1 minute
  },
  store: new SequelizeStore({
    db: models.sequelize
  })
}));

passport.use(
  new LocalStrategy(function(username, password, done){
    //console.log('LocalStrategy ' + JSON.stringify(username) + ', ' + JSON.stringify(passport));
    models.User.findOne({
      where: {
        Username: username,
      }
    }).then(function(user){
      //console.log('findOne ' + JSON.stringify(user));
      if (!user) {
        console.log('!user');
        return done(null, null);
      }
      if (user.Password != password) {
        console.log('user.Password != password');
        return done(null, null);
      }
      //console.log('Сообщение перед req.login');
      return done(null, user);
    });
  })
);

passport.serializeUser(function(user, done) {
  console.log('serializeUser: ' + JSON.stringify(user));
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log('deserializeUser: ' + id);
  models.User.findByPk(id).then(function(user){
    done(null, user);
  })
});

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/place', placeRouter);
app.use('/syscom', syscomRouter);
app.use('/freq', freqRouter);
app.use('/data', dataRouter);

app.use(passport.initialize());
app.use(passport.session());

models.sequelize.sync();

app.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), function(req, res){
  //console.log('Вход через POST login');
  res.redirect('/user/' + req.user.id);
  /*
  req.logIn(req.user, function(err) {
    console.log('Вход через req.login');
    if (err) { return done(err, null); }
    res.redirect('/user/' + req.user.id);
  });
  */
});

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.get('/authorize', passport.authorize('local'), function(req, res){
  res.render('info', {
    result: req.user
  });
});

app.get('/test', function(req, res){
  res.render('info', {
    result: req.isAuthenticated()
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
