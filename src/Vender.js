const MissionUtils = require("@woowacourse/mission-utils");
const { ERR_MSG, LOTTO_PRICE } = require("./constants/constants");
const Lotto = require("./Lotto");

class Vender {
  #purchaseAmount;
  #purchaseLottoList;

  constructor(amount) {
    this.#purchaseLottoList = [];
    this.#purchaseAmount = this.valid(amount);
  }

  play() {
    this.printPurchaseHistory();
    this.buy();
  }

  valid(amount) {
    if (isNaN(+amount)) {
      MissionUtils.Console.close();
      throw new Error(ERR_MSG.notNumber);
    }
    if (!(amount % LOTTO_PRICE === 0 && amount / LOTTO_PRICE !== 0)) {
      MissionUtils.Console.close();
      throw new Error(ERR_MSG.notThousand);
    }
    return amount;
  }

  printPurchaseHistory() {
    MissionUtils.Console.print(
      `${this.#purchaseAmount / LOTTO_PRICE}개를 구매했습니다.`
    );
  }

  buy() {
    for (let i = 0; i < this.#purchaseAmount / LOTTO_PRICE; i++) {
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
