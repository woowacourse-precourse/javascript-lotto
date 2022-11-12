const { Console } = require('@woowacourse/mission-utils');

class LottoGameController {
  constructor() {}

  start() {
    Console.readLine('구입금액을 입력해 주세요.', (input) => {});
  }
}

module.exports = LottoGameController;
