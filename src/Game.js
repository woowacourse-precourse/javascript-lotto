const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constant/Lotto');

class Game {
  initGame() {
    this.askNumber(MESSAGE.INPUT_MONEY, this.proceedStepOne.bind(this));
  }
  askNumber(message, callback) {
    Console.readLine(message, callback);
  }
  proceedStepOne(input) {}
}

module.exports = Game;
