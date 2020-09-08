var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var testRouter = require('./routes/test');
var notfoundRouter = require('./routes/404');
var allRouter = require('./routes/all');
var basicRouter = require('./routes/basic');
var checkoutRouter = require('./routes/checkout');
var contactRouter = require('./routes/contact');
var episodeRouter = require('./routes/episode');
var homeRouter = require('./routes/home');
var indexRouter = require('./routes/index');
var instructionRouter = require('./routes/instruction');
var loginRouter = require('./routes/login');
var masterclassRouter = require('./routes/masterclass');
var proRouter = require('./routes/pro');
var profileRouter = require('./routes/profile');
var standartRouter = require('./routes/standart');
var videosRouter = require('./routes/videos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/test', testRouter);
app.use('/', indexRouter);
app.use('/all', allRouter);
app.use('/basic', basicRouter);
app.use('/checkout', checkoutRouter);
app.use('/contact', contactRouter);
app.use('/episode', episodeRouter);
app.use('/home', homeRouter);
app.use('/instruction', instructionRouter);
app.use('/login', loginRouter);
app.use('/masterclass', masterclassRouter);
app.use('/pro', proRouter);
app.use('/profile', profileRouter);
app.use('/standart', standartRouter);
app.use('/videos', videosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next){
  res.status(404).render('404', {title: "Sorry, page not found"});
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
