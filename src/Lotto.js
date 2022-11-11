class Lotto {
  #numbers;

  constructor(winnigNumbers) {
    this.validate(winnigNumbers, 6);
    this.#numbers = this.castWinningNumbers(winnigNumbers);
  }

  getWinningNumbers() {
    return this.#numbers;
  }

  setWinningNumbers(bonusNumber) {
    this.validate([...this.#numbers, bonusNumber], 7);
    this.#numbers.push(Number(bonusNumber));
  }

  castWinningNumbers(winnigNumbers) {
    return winnigNumbers.map((number) => Number(number));
  }

  validate(winnigNumbers, length) {
    this.validateLength(winnigNumbers, length);
    this.validateDuplication(winnigNumbers);
    this.validateType(winnigNumbers);
    this.validateRange(winnigNumbers);
    this.validateBlank(winnigNumbers);
  }

  validateLength(winnigNumbers, length) {
    if (winnigNumbers.length !== length) {
      throw new Error(`[ERROR] 로또 번호는 ${length}개여야 합니다.`);
    }
  }

  validateType(winnigNumbers) {
    winnigNumbers.forEach((number) => {
      if (!Number(number)) {
        throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
      }
    });
  }

  validateDuplication(winnigNumbers) {
    const removedDuplicateWinningNumbers = new Set(this.castWinningNumbers(winnigNumbers));
    if (removedDuplicateWinningNumbers.size !== winnigNumbers.length) {
      throw new Error('[ERROR] 로또 번호에 중복된 수가 존재하면 안됩니다.');
    }
  }

  validateRange(winnigNumbers) {
    winnigNumbers.forEach((number) => {
      if (Number(number) < 1 || Number(number) > 45) {
        throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
      }
    });
  }

  validateBlank(winnigNumbers) {
    winnigNumbers.forEach((number) => {
      if (String(number).includes(' ')) {
        throw new Error('[ERROR] 로또 번호에 공백이 포함되면 안됩니다.');
      }
    });
  }
}

module.exports = Lotto;
