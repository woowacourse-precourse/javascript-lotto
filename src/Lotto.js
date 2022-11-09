const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  inputAmountOfMoneyToBuy() {
    const WORD_TO_PRINT = "구입금액을 입력해 주세요.";

    MissionUtils.console.readLine(WORD_TO_PRINT, (money) => {
      money = Number(money);
      checkAmountOfMoneyToBuy(money);
      makeRandomLottoNumber(money);
    });
  }
}

module.exports = Lotto;
