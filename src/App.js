const Io = require('./Io');
const { QUESTION, PRINT_SENTENSE } = require('./constants');
const User = require('./User');
const Lotto = require('./Lotto');

class App {
  #user;

  #lotto;

  showYield = result => {
    const lottoYield = this.#lotto.getYield(
      result,
      this.#user.purchaseAmout * 1000
    );
    Io.printConsole(`총 수익률은 ${lottoYield}%입니다.`);
  };

  showResult = () => {
    const result = this.#lotto.getResult(this.#user.lottoList);
    Io.printConsole(PRINT_SENTENSE.totalResult);
    this.#lotto.printResult(result);
    this.showYield(result);
  };

  inputBonusNumber = bonusNumber => {
    this.#lotto.setBonusNumber(+bonusNumber);
    this.showResult();
  };

  inputWinningNumber = winningNumbers => {
    this.#lotto = new Lotto(winningNumbers.split(',').map(Number));
    Io.inputByUser(QUESTION.bonusNumber, this.inputBonusNumber);
  };

  inputByUser = purchaseMoney => {
    this.#user = new User(purchaseMoney);
    Io.inputByUser(QUESTION.winningNumbers, this.inputWinningNumber);
  };

  play() {
    Io.inputByUser(QUESTION.purchaseAmout, this.inputByUser);
  }
}

const app = new App();
app.play();

module.exports = App;
