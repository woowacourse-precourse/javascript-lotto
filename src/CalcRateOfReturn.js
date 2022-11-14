const MissionUtils = require("@woowacourse/mission-utils");
class CalcRateOfReturn{
    #earnMoney;
    #rateOfReturn;
    constructor(insertMoney, winningStatics){
        this.#earnMoney = this.calcEarnMoney(winningStatics);
        this.#rateOfReturn = this.calcRateOfReturn(insertMoney, this.#earnMoney);
        this.printRateOfRetrun(this.#rateOfReturn);
    }
    calcEarnMoney(winningStatic){
        let winningMoney = winningStatic[4]*5000 +  winningStatic[3]*50000 +  winningStatic[2]*1500000 +  winningStatic[1]*30000000 +  winningStatic[0]*2000000000;
        return winningMoney;
    }
    calcRateOfReturn(inputMoney, earnMoney){
        const RateOfReturn = (earnMoney/inputMoney)*100;
        return this.calcDecimalPointTwo(RateOfReturn);
    }
    calcDecimalPointTwo(RateOfReturn){
        return Math.round(RateOfReturn*100)/100;
    }
    printRateOfRetrun(RateOfReturn){
        MissionUtils.Console.print("총 수익률은 "+RateOfReturn+"%입니다.");
        MissionUtils.Console.close();
    }
    getRateOfReturn(){
        return this.#rateOfReturn;
    }
}
module.exports = CalcRateOfReturn;