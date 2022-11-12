const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../constant');

class LottoGameController {
  constructor() {}

  start() {
    Console.readLine(INPUT_MESSAGE.MONEY, (input) => {});
  }
}

module.exports = LottoGameController;
