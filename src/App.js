const VendingMachine = require('./VendingMachine');

class App {
  play() {
    new VendingMachine().askPurchaseAmount();
  }
}

module.exports = App;
