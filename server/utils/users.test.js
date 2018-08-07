const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var testUsers;

  var testUsers = new Users();
  beforeEach(() => {
    testUsers = new Users();
    testUsers.users = [{
      id: '1',
      name: 'Penny',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Julie',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Ben',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    var testUsers = new Users();
    var user = {
      id: '123',
      name: 'Penny',
      room: 'The Office Fans'
    };
    var resUsers = testUsers.addUser(user.id, user.name, user.room);
    expect(testUsers.users).toEqual([user]);
  });
  it('should remove a user', () => {
    var resUser = testUsers.removeUser('1');
    //need to read [0] as get in my version returns whole array
    expect(resUser.id).toBe('1');
    expect(testUsers.users.length).toBe(2);
  });
  it('should not remove a user', () => {
    var resUser = testUsers.removeUser('123');
    expect(resUser).toNotExist();
    expect(testUsers.users.length).toBe(3);
  });

  it('should find user', () => {
    var resUser = testUsers.getUser('2');
    expect(resUser).toInclude({id: '2', name: 'Julie', room: 'React Course'});
  });

  it('should not find user', () => {
    var resUser = testUsers.getUser('123');
    expect(resUser).toNotExist();
  });


  it('should return names for Node Course', () => {
    var userList = testUsers.getUserList('Node Course');
    expect(userList).toEqual(['Penny', 'Ben']);
  });
  it('should return names for React Course', () => {
    var userList = testUsers.getUserList('React Course');
    expect(userList).toEqual(['Julie']);
  });
});
