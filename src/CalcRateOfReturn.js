class CalcRateOfReturn{
    #earnMoney;
    #rateOfReturn;
    constructor(insertMoney, winningStatics){
        this.#earnMoney = this.calcEarnMoney(winningStatics);
        this.#rateOfReturn = this.calcRateOfReturn(insertMoney, this.#earnMoney);
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
    getRateOfReturn(){
        return this.#rateOfReturn;
    }
}
module.exports = CalcRateOfReturn;