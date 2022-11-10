const MissionUtils = require('@woowacourse/mission-utils');
const lottoValidation = require('./validation/lottoValidation');

class LottoBuilder {
  constructor() {
    this.lottoList = [];
    this.WinningNumber = [];
    this.bonusNumber = null;
  }

  creatLottoList(input) {
    const lottoList = [];
    const countLotto = this.#countAmountLotto(input);

    Array(countLotto)
      .fill(countLotto)
      .forEach((_) => lottoList.push(this.#creatLottoNumber()));

    this.lottoList = lottoList;

    return lottoList;
  }

  #creatLottoNumber() {
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumber.sort((a, b) => a - b);
  }

  #countAmountLotto(input) {
    return Number(input.slice(0, input.length - 3));
  }
}

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    lottoValidation(numbers);
  }

  // TODO: 추가 기능 구현
}

module.exports = { LottoBuilder, Lotto };
