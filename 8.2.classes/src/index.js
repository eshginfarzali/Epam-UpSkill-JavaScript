class Task {
  constructor(name) {
    this.name = name;
  }
}

class Guest {
  constructor(tasks) {
    this.tasks = tasks;
  }

  getTask(index) {
    return this.tasks[index];
  }

  createTask() {
    throw new Error('method \'createTask\' is not defined');
  }

  changeType() {
    throw new Error('method \'changeType\' is not defined');
  }
}

class User {
  constructor(tasks) {
    this.tasks = tasks;
  }

  getTask(index) {
    return this.tasks[index];
  }

  createTask(task) {
    this.tasks.push(task);
  }

  changeType() {
    throw new Error('method \'changeType\' is not defined');
  }
  // changeType() {
  //   throw new Error('Method "changeType" is not defined');
  // }
}

class Admin {
  constructor(items) {
    this.items = items;
  }

  getArray() {
    return this.items;
  }

  changeType(index) {
    const item = this.items[index];
    if (item instanceof Guest) {
      const tasks = item.tasks;
      const newUser = new User(tasks);
      this.items[index] = newUser;
      return newUser;
    } else if (item instanceof User) {
      const tasks = item.tasks;
      const newGuest = new Guest(tasks);
      this.items[index] = newGuest;
      return newGuest;
    }
  }
}

module.exports.Task = Task;
module.exports.Guest = Guest;
module.exports.User = User;
module.exports.Admin = Admin;

