const Lotto = require("../src/Lotto");
const Ask = require("../src/Ask");

class App {
  play() {

    const ask = new Ask();
    ask.money();

    Console.close();
  }
}

module.exports = App;
