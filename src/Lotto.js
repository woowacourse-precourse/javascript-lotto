const { COMMENT, ERROR } = require("./constant");
const MissionUtils = require("@woowacourse/mission-utils");
const WinningNumber = require("./WinningNumber");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO_1);
    }

    const uniqueNumbers = new Set(numbers);
    if ([...uniqueNumbers].length !== 6) {
      throw new Error(ERROR.LOTTO_2);
    }
  }

  getMoneyOfLottos() {
    MissionUtils.Console.readLine(COMMENT.PURCHASE, (money) => {
      if (this.#checkValidMoney(money)) {
        const numberOfLottos = money / 1000;
        const lottos = this.#createLottos(numberOfLottos);

        const winningNumber = new WinningNumber(lottos, money);
        winningNumber.getWinningNumbers();
      }
    });
  }

  #checkValidMoney(money) {
    if (money < 1000) {
      throw new Error(ERROR.MONEY_2);
    }
    if (money % 1000 != 0) {
      throw new Error(ERROR.MONEY_1);
    }
    return true;
  }

  #createLottos(number) {
    const lottosArray = [];
    MissionUtils.Console.print("\n" + number + "개를 구매했습니다.");

    [...Array(number)].forEach(() => {
      const test = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      MissionUtils.Console.print("[" + test.join(", ") + "]");
      lottosArray.push(test);
    });

    return lottosArray;
  }
}

module.exports = Lotto;
