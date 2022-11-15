const { Console, Random } = require("@woowacourse/mission-utils/");
const { ERROR, LOTTO } = require("./constants");

class User {
  #money;
  #lottoAmount;
  #lottoList;

  constructor(money) {
    this.validate(money);
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

  validate(money) {
    this.validateNumber(money);
    this.validateUnit(money);
  }

  validateNumber(money) {
    if (isNaN(money)) {
      throw new Error(ERROR.INVALID_MONEY_NUMBER);
    }
  }

  validateUnit(money) {
    if (money % 1000 != 0) {
      throw new Error(ERROR.INVALID_MONEY_UNIT);
    }
  }

  createLottoList() {
    let tempLottoList = []
    while(tempLottoList.length < this.#lottoAmount) {
      tempLottoList.push(this.createLotto());
    }
    this.#lottoList = tempLottoList;
    this.printLottoList();
  }

  createLotto() {
    return Random.pickUniqueNumbersInRange(1, 45, LOTTO.NUMBER_COUNT);
  }

  printLottoList() {
    Console.print(`${this.#lottoAmount}개를 구매했습니다.`);
    this.#lottoList.forEach(lotto => {
      Console.print("[" + this.sortLottoAscending(lotto).join(', ') + "]");
    });
  }

  sortLottoAscending(lotto) {
    return lotto.sort(function(a, b){
      return a - b;
    }); 
  }
}

module.exports = User;