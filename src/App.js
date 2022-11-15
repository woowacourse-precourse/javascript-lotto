const User = require("./User");

class App {
  constructor() {
    this.user = new User();
  }
  play() {
    this.user.purchaseLotto();
  }
}

module.exports = App;
