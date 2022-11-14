const MissionUtils = require("@woowacourse/mission-utils");
class EnterBonusNumber{
    #bonusNumber;
    constructor(){
      this.enterBonusNumber();
    }
    enterBonusNumber(){
      MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (inputBonusNumber) => {
        this.#bonusNumber = [Number(inputBonusNumber)];
      });
    }
    getEnterBonusNumber(){
      return this.#bonusNumber;
    }  
}
module.exports = EnterBonusNumber;