const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../constant');
const Validator = require('../utils/Validator');

class LottoGameController {
  constructor() {}

  start() {
    Console.readLine(INPUT_MESSAGE.MONEY, (input) => {
      Validator.isValidMoney(input);
    });
  }
}

module.exports = LottoGameController;
