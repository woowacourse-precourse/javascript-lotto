const { Random } = require("@woowacourse/mission-utils");
const { LOTTO } = require("./constant/constant");

class NumberGenerator {
  createRandomNumber() {
    return Random.pickUniqueNumbersInRange(LOTTO.MIN, LOTTO.MAX, LOTTO.NUMBER_COUNT)
    .sort((a, b) => a - b);
  }
}

module.exports = NumberGenerator;
