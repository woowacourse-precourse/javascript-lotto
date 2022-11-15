const Controller = require('./controller');

class App {
  constructor() {
    this.controller = new Controller();
  }

  play() {
    this.controller.init();
  }
}

module.exports = App;