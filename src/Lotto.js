const Validator = require("./Validator");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validator = new Validator();

    this.validator.checkNumbersValid(numbers);
    this.#numbers = numbers;
  }

  getAllCount(allNumbers, bonusNumber) {
    let [threeCount, fourCount, fiveCount, fiveBonusCount, sixCount] = [
      0, 0, 0, 0, 0,
    ];

    allNumbers.forEach((numbers) => {
      const count = this.getMatchCount(numbers);

      switch (count) {
        case 3:
          threeCount += 1;
          break;
        case 4:
          fourCount += 1;
          break;
        case 5:
          if (numbers.includes(bonusNumber)) {
            fiveBonusCount += 1;
            break;
          }
          fiveCount += 1;
          break;

        case 6:
          sixCount += 1;
          break;
      }
    });

    return { threeCount, fourCount, fiveCount, fiveBonusCount, sixCount };
  }

  getMatchCount(numbers) {
    let count = 0;

    numbers.forEach((number) => {
      if (this.#numbers.includes(number)) {
        count += 1;
      }
    });

    return count;
  }
}

module.exports = Lotto;
