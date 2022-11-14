const { Random, Console } = require('@woowacourse/mission-utils');

class MyLotto {
  constructor(purchasePrice) {
    this.validate(purchasePrice);
    this.amount = Number(purchasePrice) / 1000;
    this.myLotto = [];
  }

  validate(purchasePrice) {
    if (/[^0-9]/.test(purchasePrice)) {
      throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.');
    }

    if (Number(purchasePrice) % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1000단위여야 합니다.');
    }
  }

  purchase() {
    const lottos = [];

    for (let i = 0; i < this.amount; i++) {
      lottos.push(this.create());
    }

    this.myLotto = lottos;
  }

  create() {
    const numbers = [];

    while (numbers.length !== 6) {
      const number = Random.pickNumberInRange(1, 45);

      if (numbers.includes(number)) {
        continue;
      }

      numbers.push(number);
    }

    return numbers;
  }

  print() {
    Console.print(`\n${this.amount}개를 구매했습니다.`);
    this.sort();
    this.myLotto.forEach((lotto) => Console.print(`[${lotto.join(', ')}]`));
    Console.print('\n');
  }

  sort() {
    this.myLotto.forEach((numbers) => numbers.sort((a, b) => a - b));
  }
}

module.exports = MyLotto;
