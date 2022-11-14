const { PRIZE } = require("./constants/index");

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
          numbers.includes(bonusNumber)
            ? (fiveBonusCount += 1)
            : (fiveCount += 1);
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

  getRevenue({ threeCount, fourCount, fiveCount, fiveBonusCount, sixCount }) {
    const threeRevenue = threeCount * PRIZE.THREE;
    const fourRevenue = fourCount * PRIZE.FOUR;
    const fiveRevenue = fiveCount * PRIZE.FIVE;
    const fiveBonusRevenue = fiveBonusCount * PRIZE.FIVE_BONUS;
    const sixRevenue = sixCount * PRIZE.SIX;

    const revenue =
      threeRevenue + fourRevenue + fiveRevenue + fiveBonusRevenue + sixRevenue;

    return revenue;
  }
}

module.exports = Lotto;
