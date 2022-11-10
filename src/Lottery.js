const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class Lottery {
  #lotteries = [];
  #lottery = [];

  inputPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (amount) => {
      this.validateAmount(amount);
      this.makeRandomLotteries(+amount / 1000);
      this.inputSixNumbers();
    });
  }

  makeRandomLotteries(quantity) {
    let quantityOfLotteries = 0;
    while (quantityOfLotteries < quantity) {
      this.makeRandomNumbers();
      quantityOfLotteries += 1;
    }
    console.log(this.#lotteries);
  }

  makeRandomNumbers() {
    this.#lottery = [];
    while (this.#lottery.length < 6) {
      const number = Random.pickNumberInRange(1, 45);
      if (!this.#lottery.includes(number)) {
        this.#lottery.push(number);
      }
    }
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
    Console.readLine("당첨 번호를 입력해 주세요.\n", (numbers) => {
      inputNumbers = numbers.split(",").map((v) => +v);
      const lotto = new Lotto(inputNumbers, this.#lotteries);
    });
  }
}

module.exports = Lottery;
