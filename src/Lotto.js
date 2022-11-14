const { LOTTO_NUMBER_RANGE } = require('./Constant');
const Utils = require('./Utils');
const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor(numbersArray) {
    Validator.lotto(numbersArray);
    this.#numbers = numbersArray;
  }

  // TODO: 추가 기능 구현
  ascendingSortLottoArray() {
    return this.#numbers.sort((a, b) => a - b);
  }

  static covertStringToNumberArray(strings) {
    return strings.split(',').map((string) => +string);
  }

  static generateLottoArray() {
    return Utils.generateRandomNumberArray(
      LOTTO_NUMBER_RANGE.MIN_RANGE,
      LOTTO_NUMBER_RANGE.MAX_RANGE,
      LOTTO_NUMBER_RANGE.LENGTH,
    ).sort((a, b) => a - b);
  }

  static generateLottoArrays(generateNumber) {
    const lottoNumbers = [];
    for (let i = generateNumber; i !== 0; i -= 1) {
      lottoNumbers.push(Lotto.generateLottoArray());
    }
    return lottoNumbers;
  }
}

// const lotto = new Lotto([1, 3, 2, 7, 4, 5]);

module.exports = Lotto;
