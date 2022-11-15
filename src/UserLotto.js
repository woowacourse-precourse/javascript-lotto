const STATIC = require("./Static");
const MissionUtils = require("@woowacourse/mission-utils");

class UserLotto {
  number;
  constructor() {
    this.number = this.createNumber();
  }

  createNumber = () => {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      STATIC.LOTTOVALUE.MIN,
      STATIC.LOTTOVALUE.MAX,
      STATIC.LOTTOVALUE.LENGTH
    );
  };
}

module.exports = UserLotto;
