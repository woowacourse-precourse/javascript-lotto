const MissionUtils = require("@woowacourse/mission-utils");

class LottoFactory {
  makeLotto() {
    const res = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    this.sortNumber(res);
    return res;
  }

  sortNumber(numbers) {
    numbers.sort((a, b) => a - b);
  }
}

module.exports = LottoFactory;
