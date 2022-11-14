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
    this.#numbers.sort((a, b) => a - b);
    console.log(this.#numbers);
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
    console.log(generateNumber);
    for (let i = generateNumber; i !== 0; i -= 1) {
      console.log(i, 'dsadsasdasad');
      lottoNumbers.push(Lotto.generateLottoArray());
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

// console.log(Lotto.generateLottoArrays(3));

// const lotto = new Lotto([1, 3, 2, 7, 4, 5]);

console.log(Lotto.covertStringToNumberArray('2,3,4,5,6,7'));

// console.log(lotto.ascendingSortLottoArray());

// console.log(lotto.matchLotto([1, 3, 2, 7, 4, 5], 1));

module.exports = Lotto;
