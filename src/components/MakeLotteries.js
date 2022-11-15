const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("../Lotto");

class MakeLotteries {
  #lotteries = [];
  #lottery = [];
  #quantity;

  constructor(amount) {
    this.validateAmount(amount);
    this.#quantity = +amount / 1000;
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
    this.#lottery = Random.pickUniqueNumbersInRange(1, 45, 6);
    this.sortLottery(this.#lottery);
    this.#lotteries.push(this.#lottery);
  }

  sortLottery(lottery) {
    lottery.sort((a, b) => a - b);
  }

  validateAmount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR]구매 금액은 1000원 단위로 입력해주세요.");
    }
  }

  inputSixNumbers() {
    let inputNumbers = [];
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (numbers) => {
      inputNumbers = numbers.split(",").map((v) => +v);
      const lotto = new Lotto(inputNumbers);
      lotto.inputBonusNumber(this.#lotteries);
    });
  }
}

module.exports = MakeLotteries;
