const MissionUtils = require("@woowacourse/mission-utils");

class LottoNumberGenerator {
  constructor() {}

  createRandomNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return this.sortingNumbers(numbers);
  }

  sortingNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

module.exports = LottoNumberGenerator;
