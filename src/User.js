const { Console, Random } = require("@woowacourse/mission-utils/");
const NUMBER_COUNT_PER_LOTTO = 6;

class User {
  #money
  #lottoAmount
  #lottoList

  constructor(money) {
    if (!this.isValid(money)) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위의 수여야 합니다.");
    }
    this.#money = money;
    this.#lottoAmount = money / 1000;
  }

  getMoney() {
    return this.#money;
  }

  getLottoAmount() {
    return this.#lottoAmount;
  }

  getLottoList() {
    return this.#lottoList;
  }

  isValid(money) {
    if (isNaN(money)) {
      return false;
    }
    if (money % 1000 != 0) {
      return false;
    }
    return true;
  }

  createLottoList() {
    let tempLottoList = []
    while(tempLottoList.length < this.#lottoAmount) {
      tempLottoList.push(this.createLotto());
    }
    this.#lottoList = tempLottoList;
  }

  createLotto() {
    const pickedRandomNumberSet = new Set();
    while(pickedRandomNumberSet.size < NUMBER_COUNT_PER_LOTTO) {
      pickedRandomNumberSet.add(Random.pickNumberInRange(1, 45));
    }
    return [...pickedRandomNumberSet];
  }
}

module.exports = User;