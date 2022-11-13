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
        this.#lotto = new Lotto(winninNumbers.split(','));
      });
    });
  }
}

const app = new App();
app.play();

module.exports = App;
