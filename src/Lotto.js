const { COMMENT } = require("./constant");
const MissionUtils = require("@woowacourse/mission-utils");
const WinningNumber = require("./WinningNumber");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateLotto(numbers);
    this.#numbers = numbers;
  }

  validateLotto(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호의 개수는 6개 이하입니다.");
    }

    const uniqueNumbers = new Set(numbers);
    if ([...uniqueNumbers].length !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }

  getMoneyOfLottos() {
    MissionUtils.Console.readLine(COMMENT.PURCHASE, (money) => {
      if (this.#validateMoney(money)) {
        const numberOfLottos = money / 1000;
        const lottos = this.#createLottos(numberOfLottos);

        const winningNumber = new WinningNumber(lottos, money);
        winningNumber.getWinningNumbers();
      }
    });
  }

  #validateMoney(money) {
    if (money < 1000) {
      throw new Error("[ERROR] 금액이 부족합니다.");
    }
    if (money % 1000 != 0) {
      throw new Error("[ERROR] 1000원 단위의 금액을 입력해 주세요.");
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
