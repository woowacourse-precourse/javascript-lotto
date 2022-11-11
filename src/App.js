const input = require('./Input');
class App {
  lottos = [];
  winLotto;
  bonusNumber;

  play() {
    input.call(
      this,
      this.getLottosByMoney,
      this.setWinLotto,
      this.setBonusNumber
    );
  }

  getLottosByMoney(money) {}
  setWinLotto(inputNumbers) {}
  setBonusNumber(inputNumber) {}
}

new App().play();
module.exports = App;
