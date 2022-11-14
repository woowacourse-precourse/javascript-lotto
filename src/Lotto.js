class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.bonusNumber;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (numbers.some((number) => !Number.isInteger(number))) {
      throw new Error('[ERROR] 로또 번호는 정수여야 합니다.');
    }
    if (numbers.some((number) => !(number >= 1 && number <= 45))) {
      throw new Error('[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.');
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error('[ERROR] 로또 번호는 중복된 숫자를 포함할 수 없습니다.');
    }
  }

  validateBonusNumber(number) {
    if (!number) {
      throw new Error('[ERROR] 보너스 번호는 한자리 숫자여야 합니다.');
    }
    if (!Number.isInteger(number)) {
      throw new Error('[ERROR] 로또 번호는 정수여야 합니다.');
    }
    if (!(number >= 1 && number <= 45)) {
      throw new Error('[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.');
    }
    if (this.#numbers.includes(number)) {
      throw new Error('[ERROR] 로또 번호는 중복된 숫자를 포함할 수 없습니다.');
    }
    this.bonusNumber = number;
  }

  checkPrize(IssuedLotto) {
    const matchingCount = this.countMatchingNumber(IssuedLotto);
    if (matchingCount === 6) {
      return '1등';
    }
    if (matchingCount === 5) {
      return this.checkBonusNumber(IssuedLotto) ? '2등' : '3등';
    }
    if (matchingCount === 4) {
      return '4등';
    }
    if (matchingCount === 3) {
      return '5등';
    }
  }

  countMatchingNumber(IssuedLotto) {
    let matchingCount = 0;
    IssuedLotto.forEach((number) => {
      if (this.#numbers.includes(number)) {
        matchingCount += 1;
      }
    });
    return matchingCount;
  }

  checkBonusNumber(IssuedLotto) {
    return IssuedLotto.includes(this.bonusNumber);
  }
}

module.exports = Lotto;
