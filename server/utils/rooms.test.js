const expect = require('expect');

const {Rooms} = require('./rooms');

describe('Rooms', () => {
  var testRooms;

  var testRooms = new Rooms();
  beforeEach(() => {
    testRooms = new Rooms();
    testRooms.rooms = [{
      room: 'ROOM A'
    }, {
      room: 'ROOM B'
    }, {
      room: 'ROOM C'
    }];
  });

  it('should add new room', () => {
    var testRooms = new Rooms();
    var room = {
        room: 'THE OFFICE FANS'
    };
    var resRooms = testRooms.addRoom(room.room);
    expect(resRooms).toEqual(room);
  });
  it('should remove a room', () => {
    var resRoom = testRooms.removeRoom('ROOM A');
    expect(resRoom.room).toBe('ROOM A');
    expect(testRooms.rooms.length).toBe(2);
  });
  it('should not remove a room', () => {
    var resRoom = testRooms.removeRoom('123');
    expect(resRoom).toNotExist();
    expect(testRooms.rooms.length).toBe(3);
  });

  it('should find room', () => {
    var resRoom = testRooms.getRoom('ROOM B');
    expect(resRoom).toInclude({room: 'ROOM B'});
  });

  it('should not find room', () => {
    var resRoom = testRooms.getRoom('123');
    expect(resRoom).toNotExist();
  });


  it('should return all rooms', () => {
    var roomList = testRooms.getRoomList();
    expect(roomList).toEqual(['ROOM A', 'ROOM B', 'ROOM C']);
  });
  
});
