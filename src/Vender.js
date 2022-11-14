const MissionUtils = require("@woowacourse/mission-utils");
const { QUESTION, ERR_MSG } = require("./constants/constants");
const Lotto = require("./Lotto");

class Vender {
  #purchaseAmount;
  #purchaseLottoList;

  constructor(amount) {
    this.#purchaseLottoList = [];
    this.#purchaseAmount = this.valid(amount);
    this.play();
  }

  play() {
    this.printPurchaseHistory();
    this.buy();
  }

  valid(amount) {
    if (isNaN(+amount)) {
      throw new Error(ERR_MSG.notNumber);
    }
    if (!(amount % 1000 === 0 && amount / 1000 !== 0)) {
      throw new Error(ERR_MSG.notThousand);
    }
    return amount;
  }

  printPurchaseHistory() {
    MissionUtils.Console.print(
      `${this.#purchaseAmount / 1000}개를 구매했습니다.`
    );
  }

  buy() {
    for (let i = 0; i < this.#purchaseAmount / 1000; i++) {
      this.generateLotto();
    }
  }

  generateLotto() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const newLotto = new Lotto(numbers);
    MissionUtils.Console.print(newLotto.printString());
    this.#purchaseLottoList.push(newLotto);
  }

  getPurchaseLotto() {
    return this.#purchaseLottoList;
  }
}

module.exports = Vender;
