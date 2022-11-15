const Controller = require("./controller/Controller");
const View = require("./view/View");

class App {
  play() {
    const view = new View;
    const controller = new Controller(view);
  }
}

module.exports = App;
