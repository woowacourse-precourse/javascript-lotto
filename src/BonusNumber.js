const MissionUtils = require("@woowacourse/mission-utils");

class BonusNumber{

  lottoBonusNumber() {
    let bonusNumber = "";
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (BonusNumber) => {
      bonusNumber = BonusNumber;
    });
    return bonusNumber;
  }
}

module.exports = BonusNumber;