class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
//return user that was removed

  }
  getUser (id) {

  }
  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var usersArray = users.map((user) => user.name);

    return usersArray;
  }
}

module.exports = {Users};
