const print = require("./console/print");
const input = require("./console/input");
const message = require("./util/message");

class App {
  constructor() {
    this.input = new input();
    this.print = new print();
  }

  play() {}

  buyMessagePrint() {
    this.print.print(message.INPUT_MESSAGE);
    this.input.inputLine().then((data) => {});
  }
}

module.exports = App;
