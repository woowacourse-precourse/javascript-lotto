const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("../Lotto");
const {
  ERROR_MSG,
  INPUT_MSG,
  MIN_NUMBER,
  MAX_NUMBER,
  LOTTO_NUMBERS,
  DIVISION_UNIT,
} = require("../constants");

class MakeLotteries {
  #lotteries = [];
  #lottery = [];
  #quantity;

  constructor(amount) {
    this.validateAmount(amount);
    this.#quantity = +amount / DIVISION_UNIT;
    this.makeRandomLotteries(this.#quantity);
  }

  makeRandomLotteries(quantity) {
    let quantityOfLotteries = 0;
    while (quantityOfLotteries < quantity) {
      this.makeRandomNumbers();
      quantityOfLotteries += 1;
    }
    this.printLotteries();
  }

  printLotteries() {
    Console.print(`\n${this.#quantity}개를 구매했습니다.`);
    this.#lotteries.forEach((lottery) => {
      Console.print("[" + lottery.join(", ") + "]");
    });
  }

  makeRandomNumbers() {
    this.#lottery = Random.pickUniqueNumbersInRange(
      MIN_NUMBER,
      MAX_NUMBER,
      LOTTO_NUMBERS
    );
    this.sortLottery(this.#lottery);
    this.#lotteries.push(this.#lottery);
  }

  sortLottery(lottery) {
    lottery.sort((a, b) => a - b);
  }

  validateAmount(amount) {
    if (amount % DIVISION_UNIT !== 0) {
      throw new Error(ERROR_MSG.OUT_OF_AMOUNT);
    }
  }

  inputSixNumbers() {
    let inputNumbers = [];
    Console.readLine(INPUT_MSG.NUMBERS_MSG, (numbers) => {
      inputNumbers = numbers.split(",").map((v) => +v);
      const lotto = new Lotto(inputNumbers);
      lotto.inputBonusNumber(this.#lotteries);
    });
  }
}

module.exports = MakeLotteries;
