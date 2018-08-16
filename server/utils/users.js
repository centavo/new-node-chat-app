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
    var user = this.getUser(id);
    // console.log(`User from getUser ${JSON.stringify(user)}`)
    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
      }
      // console.log(`User array after filter : ${JSON.stringify(this.users)}`);
      return user;
  }
  getUser (id) {
  var user = this.users.filter((user) => user.id === id)[0];
  
  return user;
  }
  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var usersArray = users.map((user) => user.name);

    return usersArray;
  }
}

module.exports = {Users};
