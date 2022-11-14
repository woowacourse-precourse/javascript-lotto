const { Random } = require("@woowacourse/mission-utils");
const { MESSAGE, PRIZE } = require("./constants/index");

class Generator {
  getAllNumbers(count) {
    const allNumbers = [];

    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedNumbers = this.sortNumbers(numbers);

      allNumbers.push(sortedNumbers);
    }

    return allNumbers;
  }

  sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  getThreeCountMessage(threeCount) {
    return (
      MESSAGE.MATCH_THREE +
      PRIZE.THREE.toLocaleString() +
      MESSAGE.MATCH_PRIZE +
      String(threeCount) +
      MESSAGE.MATCH_COUNT
    );
  }

  getFourCountMessage(fourCount) {
    return (
      MESSAGE.MATCH_FOUR +
      PRIZE.FOUR.toLocaleString() +
      MESSAGE.MATCH_PRIZE +
      String(fourCount) +
      MESSAGE.MATCH_COUNT
    );
  }

  getFiveCountMessage(fiveCount) {
    return (
      MESSAGE.MATCH_FIVE +
      PRIZE.FIVE.toLocaleString() +
      MESSAGE.MATCH_PRIZE +
      String(fiveCount) +
      MESSAGE.MATCH_COUNT
    );
  }

  getFiveBonusCountMessage(fiveBonusCount) {
    return (
      MESSAGE.MATCH_FIVE_BONUS +
      PRIZE.FIVE_BONUS.toLocaleString() +
      MESSAGE.MATCH_PRIZE +
      String(fiveBonusCount) +
      MESSAGE.MATCH_COUNT
    );
  }

  getSixCountMessage(sixCount) {
    return (
      MESSAGE.MATCH_SIX +
      PRIZE.SIX.toLocaleString() +
      MESSAGE.MATCH_PRIZE +
      String(sixCount) +
      MESSAGE.MATCH_COUNT
    );
  }

  getRateMessage(rate) {
    return MESSAGE.CALCULATE_RATE + rate + MESSAGE.CALCULATE_PERCENT;
  }
}

module.exports = Generator;
