const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../App");

class LottoNumberGenerator {
  constructor() {}

  createRandomNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return this.sortingNumbers(numbers);
  }

  sortingNumbers(numbers) {
    const nums = numbers.sort((a, b) => a - b);

    return nums;
  }
}

module.exports = LottoNumberGenerator;
