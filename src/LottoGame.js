const { Console } = require('@woowacourse/mission-utils');

class LottoGame {
  run() {
    Console.readLine('구입금액을 입력해 주세요.\n', (input) => this.inputMoney(input));
  }

  inputMoney(input) {}
}

module.exports = LottoGame;
