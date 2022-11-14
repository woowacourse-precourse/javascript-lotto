const Io = require('./Io');
const { QUESTION } = require('./constants');
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
          this.#lotto.getResult(this.#user.lottoList);
        });
      });
    });
  }
}

const app = new App();
app.play();

module.exports = App;
