const VendingMachine = require('./VendingMachine');

class App {
  constructor() {
    this.vendingMachine = new VendingMachine();
  }

  play() {
    this.vendingMachine.askPurchaseAmount();
  }
}

module.exports = App;
