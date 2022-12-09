const Model = require("./model/lotto.model");
const View = require("./view/lotto.view");
const Controller = require("./controller/lotto.controller");

class App {
  constructor() {
    this.model = new Model(this.controller);
    this.view = new View(this.model);
    this.controller = new Controller(this.view, this.model);
  }

  play() {
    this.controller.lottoCourse();
  }
}

module.exports = App;
