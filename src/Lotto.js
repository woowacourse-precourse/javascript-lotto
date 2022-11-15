const { Random } = require('@woowacourse/mission-utils');
const checkLottoValidation = require('./checkValid/checkLottoValidation');

class LottoBuilder {
  constructor() {
    this.lottoList = [];
    this.WinningNumber = [];
    this.bonusNumber = null;
  }
  createLottoList(input) {
    const lottoList = [];
    const countLotto = this.countAmountLotto(input);

    Array(countLotto)
      .fill(countLotto)
      .forEach(_ => lottoList.push(this.createLottoNumber()));

    this.lottoList = lottoList;
    return lottoList;
  }

  createLottoNumber() {
    const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumber.sort((a, b) => a - b);
  }
  countAmountLotto(input) {
    return Number(input.slice(0, input.length - 3));
  }

  build() {
    return new Lotto(this.WinningNumber, this.lottoList, this.bonusNumber);
  }
}

class Lotto {
  #numbers;
  constructor(numbers, lottoList, bonusNumber) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.lottoList = lottoList;
    this.bonusNumber = bonusNumber;
    this.stats = [];
    this.yield = null;
  }

  validate(numbers) {
    if (checkLottoValidation(numbers)) {
    }
  }

  countLotto(lotto, numbers) {
    return lotto.reduce((count, value) => {
      if (numbers.includes(value.toString())) {
        return count + 1;
      }
      return count;
    }, 0);
  }
}
module.exports = { LottoBuilder, Lotto };
