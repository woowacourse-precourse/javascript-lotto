const { Console } = require('@woowacourse/mission-utils');

class LottoGame {
  constructor() {
    this.money = 0;
  }

  run() {
    Console.readLine('구입금액을 입력해 주세요.\n', (input) => this.inputMoney(input));
  }

  inputMoney(input) {
    this.money = Number(input);
    this.purchase(this.money / 1000);
  }

  purchase(number) {
    Console.print(`\n${number}개를 구매했습니다.`);
  }
}

module.exports = LottoGame;
