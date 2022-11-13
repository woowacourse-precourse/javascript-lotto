class WinningNumbers {
  constructor() {
    this.winningNumbers = [];
    this.bonusNumber = null;
  }

  addWinningNumbers(numbers) {
    this.validateNumberDuplication(numbers);
    numbers.forEach((number) => {
      this.validateNumber(number);
      this.winningNumbers.push(number);
    });
  }

  addBonusNumber(number) {
    this.validateNumber(number);
    this.bonusNumber = Number(number);
  }

  validateNumber(number) {
    if (this.winningNumbers.includes(number)) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (number % 1 !== 0) {
      throw new Error("[ERROR] 로또 번호는 정수여야 합니다.");
    }
    if (typeof number !== "number") {
      throw new Error("[ERROR] 로또 번호의 타입은 숫자여야 합니다.");
    }
  }

  validateNumberDuplication(numbers) {
    const numberSet = new Set();
    numbers.forEach((number) => {
      numberSet.add(number);
    });
    if (numberSet.size !== 6) {
      throw new Error(
        "[ERROR] 로또 번호는 중복되지 않는 6개의 숫자여야합니다."
      );
    }
  }
}

module.exports = WinningNumbers;
