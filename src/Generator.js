const MissionUtils = require("@woowacourse/mission-utils");
class Generator {
  createWinningNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }
  createBonusNumber(lottoNumbers) {
    let bonusNumber = 0;
    while (bonusNumber === 0) {
      let number = MissionUtils.Random.pickNumberInRange(1, 45);
      if (lottoNumbers.indexOf(number) === -1) bonusNumber = number;
    }
    return bonusNumber;
  }
}
module.exports = Generator;
