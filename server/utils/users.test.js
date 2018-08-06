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
    
  });
  it('should not remove a user', () => {

  });

  it('should find user', () => {

  });

  it('should not find user', () => {

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
