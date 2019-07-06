var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var models = require('./models');
var bodyParser = require('body-parser');
var session = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(session.Store);

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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'mojietu',
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 3600000 //1 hour = 60 minutes = 60 × 60 seconds = 3600 seconds = 3600 × 1000 milliseconds = 3,600,000 ms.
    //maxAge: 60000 // 1 minute
  },
  store: new SequelizeStore({
    db: models.sequelize
  })
}));


app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/place', placeRouter);
app.use('/syscom', syscomRouter);
app.use('/freq', freqRouter);
app.use('/data', dataRouter);

models.sequelize.sync();

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
