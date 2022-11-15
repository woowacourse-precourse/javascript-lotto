const {
  isOutOfRangeAndThrowError,
  isDuplicatedAndThrowError,
  isOutOfVolumeAndThrowError,
} = require('./utils/inputValidate');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    this.#numbers.sort((a, b) => a - b);

    return this.#numbers;
  }

  validate(numbers) {
    isOutOfVolumeAndThrowError(numbers, 6);
    isDuplicatedAndThrowError(numbers);
    isOutOfRangeAndThrowError(numbers);
  }

  countWinningBonusNumbers(numbers) {
    const { winning, bonus } = numbers;
    let winningCount = 0;
    let bonusCount = 0;
    this.#numbers.forEach((number) => {
      if (winning.includes(number)) {
        winningCount += 1;
      }
      if (bonus === number) {
        bonusCount = 1;
      }
    });

    return { winningCount, bonusCount };
  }
}

module.exports = Lotto;
