const Controller = require('./controller/Controller');

class App {
  play() {
    const controller = new Controller();
    controller.start();
  }
}

module.exports = App;
