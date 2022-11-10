const LottoGenerator = require('./LottoGenerator');

class LottoGame {
  constructor(inputConsole, user) {
    this.inputConsole = inputConsole;
    this.user = user;
    this.lottoGenerator = new LottoGenerator();
  }

  start() {
    this.inputConsole.userMoney((money) => {
      this.user.setMoney(money);
      this.purchase(this.user.getMoney());
    });
  }

  purchase(money) {
    const lotto = this.lottoGenerator.getTimes(money / 1000);
    this.user.setLotto(lotto);
    console.log(this.user.getLotto());
  }
}

module.exports = LottoGame;
