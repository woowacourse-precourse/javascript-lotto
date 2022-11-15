const { Console } = require('@woowacourse/mission-utils');
const { LOTTO, MESSAGE } = require('./constant/Lotto');
const Validation = require('./Validation');

class Game {
  initGame() {
    this.askNumber(MESSAGE.INPUT_MONEY, this.proceedStepOne.bind(this));
  }
  askNumber(message, callback) {
    Console.readLine(message, callback);
  }
  proceedStepOne(input) {
    Validation.validateMoney(input);
    const numberOfLotto = Math.floor(input / LOTTO.PRICE);
    Console.print(MESSAGE.PURCHASE_RESULT(numberOfLotto));
  }
}

module.exports = Game;
