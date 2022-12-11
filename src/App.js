const Controller = require('./controller/Controller');

class App {
  #controller;

  play() {
    this.#controller = Controller.create();
    this.#controller.run();
  }
}

module.exports = App;
