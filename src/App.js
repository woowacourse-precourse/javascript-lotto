const print = require("./console/print");
const input = require("./console/input");

class App {
  constructor() {
    this.input = new input();
    this.print = new print();
  }

  play() {}
}

module.exports = App;
