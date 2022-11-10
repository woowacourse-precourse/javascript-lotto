const { Console } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;
  #lotteries;
  #bonusNumber;
  #winResult = new Map();

  constructor(numbers, lotteries) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.#lotteries = lotteries;
    this.inputBonusNumber();
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  inputBonusNumber() {
    Console.readLine("\n보너스 번호를 입력해 주세요,\n", (number) => {
      this.#bonusNumber = number;
      this.iterateLotteries();
      console.log(this.#winResult);
    });
  }

  iterateLotteries() {
    this.#lotteries.forEach((lottery) => {
      this.checkLottery(lottery);
    });
  }

  checkLottery(lottery) {
    let matchCount = 0;
    this.#numbers.forEach((number) => {
      if (lottery.includes(number)) {
        matchCount += 1;
      }
    });
    if (matchCount == 5) this.checkBonus(lottery) ? (matchCount += 2) : "";
    this.makeWinResult(matchCount);
  }

  checkBonus(lottery) {
    return lottery.includes(+this.#bonusNumber);
  }

  makeWinResult(result) {
    this.#winResult.get(result)
      ? this.#winResult.set(result, this.#winResult.get(result) + 1)
      : this.#winResult.set(result, 1);
  }
}

module.exports = Lotto;
