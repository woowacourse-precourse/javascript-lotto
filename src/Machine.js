const User = require('./User');

class Machine {
  #money;

  constructor() {
    this.user = new User();
    this.#money = 0;
  }
}

module.exports = Machine;
