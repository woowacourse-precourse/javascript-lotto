class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.validateWinningNumLength(numbers);
    this.validateWinningNumNoDuplicates(numbers);
    this.validateWinningNumBetween1To45(numbers);
    this.validateWinningNumInteger(numbers);
  }

  validateWinningNumLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  validateWinningNumNoDuplicates(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  validateWinningNumBetween1To45(numbers) {
    numbers.forEach((num) => {
      if (num < 1 || num > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });
  }

  validateWinningNumInteger(numbers) {
    numbers.forEach((num) => {
      if (!Number.isInteger(num)) {
        throw new Error("[ERROR] 로또 번호는 정수여야 합니다.");
      }
    });
  }



  // TODO: 추가 기능 구현
}

module.exports = Lotto;
