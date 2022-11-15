const Controller = require("./Controller");

class App {
  #controller;
  constructor() {
    this.#controller = new Controller();
  }
  play() {
    this.#controller.run();
  }
}

module.exports = App;
