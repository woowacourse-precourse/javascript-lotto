const MissionUtils = require('@woowacourse/mission-utils');
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    Lotto.validateNumberArrayDuplication(numbers);
    numbers.forEach((number) => {
      Lotto.validateLottoNumber(number);
    });
  }

  // TODO: 추가 기능 구현
  getLottoNumbers() {
    return this.#numbers;
  }

  static validateLottoNumber(number) {
    if (typeof number !== 'number' || isNaN(number))
      throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
    if (number < 1 || number > 45)
      throw new Error('[ERROR] 로또 번호의 범위는 1 ~ 45여야 합니다.');
  }

  static validateNumberArrayDuplication(array) {
    const arrayToSet = new Set(array);
    if (array.length !== arrayToSet.size)
      throw new Error('[ERROR] 번호는 중복되지 않아야 합니다.');
  }

  printLotto() {
    MissionUtils.Console.print(
      `[${this.ascendingOrderNumbers(this.#numbers).join(', ')}]`,
    );
  }

  ascendingOrderNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

module.exports = Lotto;
