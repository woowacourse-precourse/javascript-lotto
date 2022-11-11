const Lotto = require('../Lotto');
const MissionUtils = require("@woowacourse/mission-utils");

class LottoUserDto extends Lotto {
  constructor() {
    super(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
  }
}

module.exports = LottoUserDto;
