const MissionUtils = require("@woowacourse/mission-utils");
const Lotto=require("./Lotto");

class Bonus{
  constructor(){
    this.winingNumbers=Lotto.createWiningNumber();
  }
  bonusNumber(){
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요',(bonus)=>{
      if(this.bonusNumberValidate(this.winingNumbers,bonus)) return bonus;
    });
  }
  bonusNumberValidate(winingNumbers,bonus){
    if(winingNumbers.includes(bonus)){
      throw new Error("[ERROR] 보너스 번호가 잘못입력 되었습니다.");
    }
    if(bonus.length!==1){
      throw new Error("[ERROR] 보너스 번호가 잘못입력 되었습니다.");
    }
    if(bonus<0 && bonus>45){
      throw new Error("[ERROR] 보너스 번호가 잘못입력 되었습니다.");
    }
    return true;
  }
}
module.exports = Bonus;