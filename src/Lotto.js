const { ERROR_MESSAGE } = require('./Message');
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.NUMBERS_LENGTH);
    }
    const numberSet = new Set(numbers);
    if (numberSet.size != 6)
      throw new Error(ERROR_MESSAGE.DUPLICATION);

    if (numbers.some(number => {
      return isNaN(number)
    })) {
      throw new Error(ERROR_MESSAGE.ONLY_NUMBER)
    }

    if (numbers.some(number => {
      return number < 1 || number > 45 || number === 0
    })) {
      throw new Error(ERROR_MESSAGE.NUMBER_RANGE)
    }
  }

  toString() {
    return `[${this.#numbers.join(", ")}]`;
  }

  generateNumObject() {
    const numObject = {};
    for (let i = 1; i <= 45; i++) {
      numObject[i] = false;
    }
    return numObject;
  }

  countingWin(winNumbers) {
    let winCount = 0;
    const numObject = this.generateNumObject();
    this.#numbers.forEach((number) => {
      numObject[number] = true;
    });
    winNumbers.forEach((number) => {
      if (numObject[number]) winCount++;
    });
    return winCount;
  }

  rank(winNumbers, bonusNumber) {
    const winCount = this.countingWin(winNumbers);
    switch (winCount) {
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        return this.#numbers.includes(bonusNumber) ? 2 : 3;
      case 6:
        return 1;
    }
  }
}

module.exports = Lotto;
