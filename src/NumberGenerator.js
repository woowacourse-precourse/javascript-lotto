const MissionUtils = require("@woowacourse/mission-utils");

class NumberGenerator {
  createNumbersOfLotto = () => {
    const numbersOfLotto = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      45,
      6
    );
    numbersOfLotto.sort(function (a, b) {
      return a - b;
    });
    return numbersOfLotto;
  };
}

module.exports = NumberGenerator;
