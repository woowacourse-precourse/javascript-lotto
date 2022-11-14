const VendingMachine = require('./VendingMachine');

class App {
  play() {
    new VendingMachine().init();
  }
}

module.exports = App;
