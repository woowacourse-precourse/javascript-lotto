const View = require("../view/View");

class Controller {
  constructor() {
    const view = new View(this);
  }

  init() {}
}

module.exports = Controller;
