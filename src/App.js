const Controller = require('./Controller');

class App {
  constructor() {
    this.controller = new Controller();
  }

  play() {
    this.controller.start();
  }
}

module.exports = App;

const app = new App();
app.play();
