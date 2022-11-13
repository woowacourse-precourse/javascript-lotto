const Clerk = require('./Clerk.js');
const NumberGenerator = require('./NumberGenerator.js');

class App {
  constructor() {
    this.money = new Clerk().getBuyLottoMoney();
    this.lottoNumberGenerator = new NumberGenerator(this.money / 1000);
  }
  
  play() {
    const userNumber = this.lottoNumberGenerator.getUserNumber();
  }
}

module.exports = App;
