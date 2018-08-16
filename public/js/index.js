const socketIO = require('socket.io');
const {Rooms} = require('./rooms');

 socket.on('connect', function () {
  console.log('trying out index.js');
  var rooms = rooms.getRoomList();
  console.log(`list of rooms ${rooms}`);

  // rooms.forEach(function (room) {
  //   const option = `<option value="${room.toLowerCase()}">${room}</option>`;
  //   jQuery('#rooms').append(option);
  });
});
