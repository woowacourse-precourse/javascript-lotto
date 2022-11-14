const { Random } = require('@woowacourse/mission-utils');

class MyLotto {
  constructor(purchasePrice) {
    this.validate(purchasePrice);
    this.amount = Number(purchasePrice) / 1000;
    this.numbers = [];
    this.createN();
  }

  createN() {
    for (let i = 0; i < this.amount; i++) {
      this.create();
    }
  }

  create() {
    const lottoNumber = [];

    while (lottoNumber.length !== 6) {
      const number = Random.pickNumberInRange(1, 45);

      if (lottoNumber.includes(number)) {
        continue;
      }

      lottoNumber.push(number);
    }

    this.numbers.push(lottoNumber);
  }

  validate(purchasePrice) {
    if (/[^0-9]/.test(purchasePrice)) {
      throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.');
    }

    if (Number(purchasePrice) % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1000단위여야 합니다.');
    }
  }
}

module.exports = MyLotto;
