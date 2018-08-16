class Rooms {
  constructor () {
    this.rooms = [];
  }
  addRoom (roomName) {
    var room = {room: roomName};
    this.rooms.push(room);
      return room;
  }
  removeRoom (roomName) {
    var room = this.getRoom(roomName);
    if (room) {
      this.rooms = this.rooms.filter((room) => room.room !== roomName);
      }
      return room;
  }
  getRoom (roomName) {
  var resRoom = this.rooms.filter((room) => room.room === roomName)[0];
  return resRoom;
  }
  getRoomList () {

    var roomsArray = this.rooms.map((room) => room.room);
    return roomsArray;
  }
}

module.exports = {Rooms};
