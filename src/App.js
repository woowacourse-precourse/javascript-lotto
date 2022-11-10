const Lotto = require("./Lotto");
const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  #lotteries = [];
  #lottery = [];

  play() {
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (amount) => {
      this.validateAmount(amount);
      this.makeRandomLotteries(+amount / 1000);
    });
  }

  makeRandomLotteries(quantity) {
    let quantityOfLotteries = 0;
    while (quantityOfLotteries < quantity) {
      this.makeRandomNumbers();
      quantityOfLotteries += 1;
    }
    console.log(this.#lotteries);
    Console.close();
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
}

const app = new App();
app.play();

module.exports = App;
