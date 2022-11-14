const { Console, Random } = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.lottoList = [];
  }

  NumberPackage(money) {
    this.validate(money);
    this.#numbers = this.howManyLotto(money);
    Console.print(`\n${this.#numbers}개를 구매했습니다.`);

    for (let i = 0; i < this.#numbers; i += 1) {
      const lottoNumber = this.sortLottoNumber(Random.pickUniqueNumbersInRange(1, 45, 6));
      Console.print(lottoNumber);
      this.lottoList.push(lottoNumber);
    }
    return this.lottoList;
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
    if (isNaN(money)) throw new Error('[ERROR] 돈이 아닙니다.');
  }

  rightAmount(money) {
    if (money % 1000 !== 0)
      throw new Error('[ERROR] 천원 단위로 입력해주세요.');
  }
}

module.exports = Lotto;
