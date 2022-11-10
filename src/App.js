const { Console, Random } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE, ERROR_MESSAGE, UNIT } = require("./constant/constant");
const Lotto = require("./Lotto");

class App {
  play() {
    this.getMoney();
  }

  getMoney() {
    Console.readLine(INPUT_MESSAGE.MONEY, (money) => {
      this.validateMoney(money);
      this.lotteryQuantity = +money / UNIT.MONEY;
      const lotteries = this.exchangeLottery(this.lotteryQuantity);
    });
  }

  validateMoney(money) {
    if (+money % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.WRONG_MONEY);
    }
  }

  exchangeLottery(quantity) {
    const lotteries = [];
    for (let i = 0; i < quantity; i++) {
      lotteries.push(new Lotto(this.generateRandomNumbers()));
    }
    return lotteries;
  }

  generateRandomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}
console.log(new App().generateRandomNumbers());
module.exports = App;
