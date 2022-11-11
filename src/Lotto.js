const { LOTTO_ERROR_MESSAGES, LOTTO_NUMBER_RANGE } = require('./Constant');
const utils = require('./Utils');

class Lotto {
  #numbers;

  constructor(numbersArray) {
    Lotto.validate(numbersArray);
    this.#numbers = numbersArray;
  }

  static validate(numbersArray) {
    if (numbersArray.length !== LOTTO_NUMBER_RANGE.LENGTH) {
      throw new Error(LOTTO_ERROR_MESSAGES.LENGTH_ONLY_SIX);
    }
    if (new Set([...numbersArray]).size !== LOTTO_NUMBER_RANGE.LENGTH) {
      throw new Error(LOTTO_ERROR_MESSAGES.UNIQUE);
    }
    return true;
  }

  // TODO: 추가 기능 구현
  ascendingSortLottoArray() {
    this.#numbers.sort((a, b) => a - b);
  }

  static generateLottoArray(generateNumber) {
    const lottoNumbers = [];
    for (let i = generateNumber; i === 0; i -= 1) {
      lottoNumbers.push(
        utils.generateRandomNumberArray(
          LOTTO_NUMBER_RANGE.MIN_RANGE,
          LOTTO_NUMBER_RANGE.MAX_RANGE,
          LOTTO_NUMBER_RANGE.LENGTH,
        ),
      );
    }
    return lottoNumbers;
  }
}

const lotto = new Lotto([1, 3, 2, 7, 4, 5]);

console.log(lotto.ascendingSortArray());

module.exports = Lotto;
