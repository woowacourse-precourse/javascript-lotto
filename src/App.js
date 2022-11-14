const Io = require('./Io');
const { QUESTION, PRINT_SENTENSE } = require('./constants');
const User = require('./User');
const Lotto = require('./Lotto');

class App {
  #user;

  #lotto;

  play() {
    Io.inputByUser(QUESTION.purchaseAmout, purchaseMoney => {
      this.#user = new User(purchaseMoney);
      Io.inputByUser(QUESTION.winningNumbers, winninNumbers => {
        this.#lotto = new Lotto(winninNumbers.split(',').map(Number));
        Io.inputByUser(QUESTION.bonusNumber, bonusNumber => {
          this.#lotto.setBonusNumber(+bonusNumber);
          const result = this.#lotto.getResult(this.#user.lottoList);
          Io.printConsole(PRINT_SENTENSE.totalResult);
          this.#lotto.printResult(result);
          const lottoYield = this.#lotto.getYield(result, purchaseMoney);
          Io.printConsole(`총 수익률은 ${lottoYield}%입니다.`);
        });
      });
    });
  }
}

const app = new App();
app.play();

module.exports = App;
