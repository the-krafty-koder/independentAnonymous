import http from "http";
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';

import logger from 'morgan';
import * as db from "./api/models/db.js";
import cors from "cors";

import socket from "socket.io";

import indexRouter from  './routes/index.js';
import usersRouter from './routes/users.js';
import apiRouter from './api/routes/articles.js';
import editorRouter from './editor/routes.js';

let app = express();
let __dirname = process.cwd();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/editor',function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  //res.setHeader('Access-Control-Allow-Credentials', false);
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);
app.use('/', editorRouter);


//app.use(cors());


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

const server = http.Server(app);

const io = socket(server,/*{
    handlePreflightRequest: (req, res) => {
        const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": "*", //or the specific origin you want to give access to,
            "Access-Control-Allow-Credentials": true
        };
        res.writeHead(200, headers);
        res.end();
    }
}*/);
// socket-io
io.on("connection",(socket)=>{
	console.log("conected");
	socket.on("message",(evt)=>{
		console.log(evt);
		socket.broadcast.emit("message",evt);
	})
});

io.on("disconnect",()=>{
	console.log("people left");
})

server.listen(8080,()=>console.log("Server starts listening"));


