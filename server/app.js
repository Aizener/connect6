var express = require('express');
var path = require('path');
var http = require('http');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { Server } = require('socket.io');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

var httpServer= http.createServer(app);
var io = new Server(httpServer, {
    cors: { origin: '*' }
})
io.on('connection', () => {
    console.log('onConnection!');
})
io.listen(3002);

module.exports = app;
