const MissionUtils = require("@woowacourse/mission-utils");

class BonusNumber{

  lottoBonusNumber() {
    let bonusNumber = "";
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (BonusNumber) => {
      bonusNumber = BonusNumber;
    });
    return bonusNumber;
  }

  lottoBonusNumberDuplicationCheck(lottoWinningNumber, bonusNumber) {
    if (!lottoWinningNumber.includes(bonusNumber)) {
      return bonusNumber;
    }
    return -1;
  }
}

module.exports = BonusNumber;