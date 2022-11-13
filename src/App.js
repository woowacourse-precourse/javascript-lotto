const Clerk = require('./Clerk.js');
const NumberGenerator = require('./NumberGenerator.js');
const NumberReceiver = require('./NumberReceiver.js');
const Lotto = require('./Lotto.js');

class App {
  constructor() {
    this.money = new Clerk().getBuyLottoMoney();
    this.lottoNumberGenerator = new NumberGenerator(this.money / 1000);
    this.numberReceiver = new NumberReceiver();
  }
  
  play() {
    const userNumber = this.lottoNumberGenerator.getUserNumber();
    const lottoNumber = this.numberReceiver.getLottoNumber();
    const bonusNumber = this.numberReceiver.getBonusNumber();
    const lotto = new Lotto(lottoNumber);
  }
}

module.exports = App;
