const { LOTTO_ERROR_MESSAGES, LOTTO_NUMBER_RANGE } = require('./Constant');
const Utils = require('./Utils');

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
    console.log(this.#numbers);
  }

  static generateLottoArray(generateNumber) {
    const lottoNumbers = [];
    for (let i = generateNumber; i === 0; i -= 1) {
      lottoNumbers
        .push(
          Utils.generateRandomNumberArray(
            LOTTO_NUMBER_RANGE.MIN_RANGE,
            LOTTO_NUMBER_RANGE.MAX_RANGE,
            LOTTO_NUMBER_RANGE.LENGTH,
          ),
        )
        .sort((a, b) => a - b);
    }
    return lottoNumbers;
  }

  matchLotto(userLottoArrays, bonusNumber) {
    let winningCount = 0;
    this.#numbers.forEach((number) => {
      if (userLottoArrays.includes(number)) winningCount += 1;
    });
    if (winningCount === 6) return 1;
    if (winningCount === 5 && this.#numbers.includes(bonusNumber)) return 2;
    if (winningCount === 5) return 3;
    if (winningCount === 4) return 4;
    if (winningCount === 3) return 5;
    if (winningCount < 3) return null;
    return null;
  }
}

const lotto = new Lotto([1, 3, 2, 7, 4, 5]);

console.log(lotto.ascendingSortLottoArray());

console.log(lotto.matchLotto([1, 3, 2, 7, 4, 5], 1));

module.exports = Lotto;
