const { CONSTANTS } = require("./constant/constants");
const { AMOUNT_ERROR_MESSAGE } = require("./constant/message");
const { Console } = require("@woowacourse/mission-utils");

class LottoAmount {
  #amount;

  constructor(amount) {
    this.#amount = amount;
  }

  countLotto(amount) {
    return amount / CONSTANTS.LOTTO_PRICE;
  }

  printCountedLottoes(lottoes) {
    Console.print(`\n${lottoes}개를 구매했습니다.`);
  }

  validateAmount(amount) {
    if (amount <= 0) {
      throw new Error(AMOUNT_ERROR_MESSAGE.NOT_PLUS_INPUT);
    }
    if (amount % 1000 !== 0) {
      throw new Error(AMOUNT_ERROR_MESSAGE.NOT_RIGHT_UNIT);
    }
    if (amount === "") {
      throw new Error(AMOUNT_ERROR_MESSAGE.REQUIRE_INPUT);
    }
    if (amount.includes(" ")) {
      throw new Error(AMOUNT_ERROR_MESSAGE.INCLUDED_SPACE);
    }
  }
}

module.exports = LottoAmount;
