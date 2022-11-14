const Console = require('./Console');

class App {
  purchase;

  play() {}

  setPurchase() {
    Console.readLine(Console.INPUT.PURCHASE, (input) => {
      this.purchase = Number(input);
      Console.close();
    });
  }
}

module.exports = App;
