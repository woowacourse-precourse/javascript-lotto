const Controller = require('./controller/Controller');

class App {
  constructor() {
    this.Controller = new Controller();
  }

  play() {
    this.Controller.start();
  }
}

const app = new App();
app.play();

module.exports = App;
