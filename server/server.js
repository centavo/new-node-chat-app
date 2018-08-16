const path = require('path');  //built in node module
const http = require('http'); // built in node module
const express = require('express');
const socketIO = require('socket.io');
const changeCase = require('change-case');

const {isRealString} = require('./utils/validation');
const {Users} = require('./utils/users');
const {generateMessage, generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
var users = new Users();

app.use(express.static(publicPath));


//listen for an event and do something when it happens
//these are built in events
io.on('connection', (socket) => {
  console.log('New user connected');


  socket.on('join', (params, callback) => {
    var room = changeCase.titleCase(params.room);
    var name = changeCase.titleCase(params.name);
    
    if(!isRealString(name) || !isRealString(room)) {
      return callback('Display Name and Room Name are required.')
    }
    var currentUsers = users.getUserList(room);

    if(currentUsers.includes(name)) {
      return callback(`User name ${name} has been taken`);
    }
    socket.join(room);
    users.removeUser(socket.id);

    console.log(currentUsers);
    users.addUser(socket.id, name, room);

    io.to(room).emit('updateUserList', users.getUserList(room));
    //socket.leave('The Office Fans');
    //io.emit (sends to all) => io.to('The Office Fans').emit (sends to all in this room)
    //socket.broadcast.emit (sends to all except person sending message) => socket.broadcast.to('The Office Fans').emit
    //socket.emit (sends to that user)
    socket.emit('newMessage', generateMessage('Admin', `Welcome to the Chat App - you have joined "${room}"`));
    socket.broadcast.to(room).emit('newMessage', generateMessage('Admin', `${name} has joined`));


    callback();
  });

  socket.on('createMessage', (newMessage, callback) => {
    var user = users.getUser(socket.id);
    console.log(user.room);
    if (user && isRealString(newMessage.text)) {
      io.to(user.room).emit('newMessage', generateMessage(user.name, newMessage.text));
    }

    callback();
  });

  socket.on('createLocationMessage', (coords) => {
    var user = users.getUser(socket.id);

    if(user) {
      io.to(user.room).emit('newLocationMessage', generateLocationMessage(user.name, coords.latitiude, coords.longitude));
    }

  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
    var user = users.removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('updateUserList', users.getUserList(user.room));
      io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has left.`));
    }
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});



// code which created server in background(app.listen) which was fine before
// we needed to plug in socket.io
// app.use(express.static(publicPath));
// app.listen(port, () => {
//   console.log(`Server is up on port ${port}`);
// });



























// console.log(__dirname + '/../public');
// console.log(publicPath);
