const { Console, Random } = require("@woowacourse/mission-utils");
const {
  INPUT_MESSAGE,
  ERROR_MESSAGE,
  UNIT,
  RESULT_MEESAGE,
} = require("./constant/constant");
const Lotto = require("./Lotto");

class App {
  play() {
    this.getMoney();
  }

  getMoney() {
    Console.readLine(INPUT_MESSAGE.MONEY, (money) => {
      this.validateMoney(money);
      const lottos = this.exchangeLotto(+money / UNIT.MONEY);
      this.printLottos(lottos);
    });
  }

  validateMoney(money) {
    if (+money % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.WRONG_MONEY);
    }
  }

  exchangeLotto(quantity) {
    const lottos = [];
    for (let i = 0; i < quantity; i++) {
      lottos.push(new Lotto(this.generateRandomNumbers()));
    }
    return lottos;
  }

  generateRandomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  printLottos(lottos) {
    const numbers = lottos.map((lotto) => `[${lotto.numbers}]`);
    Console.print(RESULT_MEESAGE.PURCHASE.replace("N", numbers.length));
    Console.print(numbers.join("\n"));
  }
}
module.exports = App;
