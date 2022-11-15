const MissionUtils = require("@woowacourse/mission-utils");

class NumberGenerator {
  createNumbersOfLotto = () => {
    const numbersOfLotto = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      45,
      6
    );
    return numbersOfLotto;
  };
}

module.exports = NumberGenerator;
