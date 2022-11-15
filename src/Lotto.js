const { Console, Random } = require('@woowacourse/mission-utils');
const { LOTTO_MESSAGE } = require('./setting/Message');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.lottoList = [];
  }

  NumberPackage(money) {
    this.validate(money);
    this.#numbers = this.howManyLotto(money);
    this.printHowManyLotto();

    for (let i = 0; i < this.#numbers; i += 1) {
      const lottoNumber = this.sortLottoNumber(Random.pickUniqueNumbersInRange(1, 45, 6));
      Console.print(`[${lottoNumber.join(', ')}]`);
      this.lottoList.push(lottoNumber);
    }
    return this.lottoList;
  }

  printHowManyLotto() {
    Console.print(`\n${this.#numbers}개를 구매했습니다.`);
  }

  howManyLotto(money) {
    return money / 1000;
  }

  sortLottoNumber(Array) {
    return Array.sort((a, b) => a - b);
  }

  validate(money) {
    this.isItNumber(money);
    this.rightAmount(money);
    return true;
  }

  isItNumber(money) {
    if (isNaN(money)) throw new Error(LOTTO_MESSAGE.NO_MONEY);
  }

  rightAmount(money) {
    if (money % 1000 !== 0)
      throw new Error(LOTTO_MESSAGE.WRONG_UNIT);
  }
}

module.exports = Lotto;
