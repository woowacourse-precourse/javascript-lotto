const Controller = require("./controller/Controller");

class App {
  play() {
    new Controller().init();
  }
}

module.exports = App;
