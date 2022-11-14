const User = require("../src/User");

class App {
  play() {
    const user = new User();

    user.buy();
  }
}

module.exports = App;
