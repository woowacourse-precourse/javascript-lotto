const MissionUtils = require("@woowacourse/mission-utils");
const Error = require("./ErrorMessage.js") 
const Notice = require("./NoticeMessage.js")
const Lotto = require("./Lotto.js")
class LottoSell{
    constructor(){
        this.Lotto = new Lotto()
        this.Lottobuynumber = [];
    }
    Inputmoney(money){
        this.validateMoney(money)
        this.makeRandomnumber(money)
    }
    validateMoney(money){
        if (money % 1000 != 0) {
            throw Error.UNIT_ERROR;
        }
    }
    makeRandomnumber(money){
        const LottoCount = money / 1000;
        MissionUtils.Console.print(LottoCount + Notice.BUY_LOTTO)
        for (let i = 0; i<LottoCount; i++){
          let RandomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
          MissionUtils.Console.print(`[${RandomNumber.join(', ')}]`);
          this.Lotto.validate(RandomNumber);
          this.Lottobuynumber.push(RandomNumber)
        }
    }
}
module.exports = LottoSell;
