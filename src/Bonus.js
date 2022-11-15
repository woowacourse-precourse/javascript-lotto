const MissionUtils = require("@woowacourse/mission-utils");


class Bonus{
  bonusNumberValidate(getWining,getbonus){
    if(getWining.includes(getbonus)){
      throw new Error("[ERROR] 보너스 번호가 잘못입력 되었습니다.");
    }
    if(isNaN(getbonus)){
      throw new Error("[ERROR] 보너스 번호가 잘못입력 되었습니다.");
    }
    if(getbonus<0 && getbonus>45){
      throw new Error("[ERROR] 보너스 번호가 잘못입력 되었습니다.");
    }
    return true;
  }
}
module.exports = Bonus;