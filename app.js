let createError = require('http-errors');
let express = require('express');
let flash = require('connect-flash');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let session = require('express-session');
let indexRouter = require('./src/routes/index');
let usersRouter = require('./src/routes/users');
let cdListRouter = require('./src/routes/cd-list');
let playListRouter = require('./src/routes/cd-list');
let intercept = require('./src/utils/intercept');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: '123456',
    cookie: {maxAge: 60 * 1000 * 30},
    resave: false,
    saveUninitialized: true
}));
app.use(flash());
// set flash
app.use(function (req, res, next) {
    res.locals.errors = req.flash('error');
    res.locals.infos = req.flash('info');
    next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.all('/*', intercept);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/music/cdList', cdListRouter);
app.use('/music/playList', playListRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
