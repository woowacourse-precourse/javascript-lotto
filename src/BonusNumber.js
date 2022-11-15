const MissionUtils = require("@woowacourse/mission-utils");
const SPECIAL_CHARACTERS = /[~!@#$%^&*()_+|<>?:{}]/;

class BonusNumber{

  lottoBonusNumber() {
    let bonusNumber = "";
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (BonusNumber) => {
      bonusNumber = BonusNumber;
    });
    MissionUtils.Console.close();
    if (bonusNumber <= 0 || bonusNumber === String || SPECIAL_CHARACTERS.test(bonusNumber)) {
      throw "[ERROR]";
    }

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