const Controller = require("./controller/Controller");
const View = require("./view/View");

class App {
  play() {
    new Controller(new View());
  }
}

module.exports = App;
