const Model = require("./model/lotto.model");
const View = require("./view/lotto.view");
const Controller = require("./controller/lotto.controller");

class App {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.controller = new Controller(this.view, this.model);
  }

  play() {
    this.controller.start();
  }
}

module.exports = App;
