const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE, ERROR_MESSAGE } = require("../src/constant/message");

class LottoPlay {
  constructor() {
    this.play();
  }

  play() {
    Console.readLine(INPUT_MESSAGE.INPUT_MONEY_MESSAGE, (amount) => {
      this.validateAmountUnit(amount);
      this.countLotto(amount);
    });
  }

  countLotto(amount) {
    const lottoes = amount / 1000;
    Console.print(`${lottoes}개를 구매했습니다.`);
  }

  validateAmountUnit(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.NOT_RIGHT_UNIT);
    }
  }
}

module.exports = LottoPlay;
