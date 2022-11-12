const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../constant');
const { MoneyValidator } = require('../utils/Validator');

class LottoGameController {
  constructor() {}

  start() {
    Console.readLine(INPUT_MESSAGE.MONEY, (input) => {
      MoneyValidator.validate(input);
    });
  }
}

module.exports = LottoGameController;
