const LOTTO = require('../constant/constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  get lottoNumbers() {
    return this.#numbers;
  }

  validate(numbers) {
    this.checkLength(numbers);
    this.checkIsNumber(numbers);
    this.checkDuplicate(numbers);
    this.checkNumberRange(numbers);
  }

  checkLength(numbers) {
    if (numbers.length !== LOTTO.LENGTH) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  checkDuplicate(numbers) {
    const set = new Set();
    numbers.forEach((number) => {
      set.add(number);
    });

    if (set.size != LOTTO.LENGTH) {
      throw new Error('[ERROR] 로또 번호는 중복되면 안됩니다. ');
    }
  }

  checkIsNumber(numbers) {
    const checker = /^[0-9]+$/;
    const checkedArray = numbers.filter((n) => checker.test(n));
    if (checkedArray.length !== LOTTO.LENGTH)
      throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
  }

  checkNumberRange(numbers) {
    const checkedArray = numbers.filter(
      (n) => n >= LOTTO.RANGE.START && n <= LOTTO.RANGE.END
    );
    if (checkedArray.length !== LOTTO.LENGTH) {
      throw new Error('[ERROR] 로또 번호의 범위를 벗어났습니다.');
    }
  }
}

module.exports = Lotto;
