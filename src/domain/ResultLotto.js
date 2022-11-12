const MissionUtils = require("@woowacourse/mission-utils");

class ResultLotto{
    constructor(){
        this.matchLottoCount = 0;
        this.resultLottos = [];
        this.winCounts = [];
        this.profit = 0;
        this.prizeMoney = [5000,50000,1500000,30000000,2000000000];
    }

    matchLotto(myLotto,lotto,bonusNumber){
        this.matchLottoCount = 0
        myLotto.map((element)=>{
            if(lotto.indexOf(element) !== -1) this.matchLottoCount++;
        })
        if(this.matchLottoCount == 5){
        this.matchLottoCount = this.matchBonus(myLotto,bonusNumber)
        }
        this.resultLottos.push(this.matchLottoCount)
    }

    matchBonus(myLotto,bonusNumber){
        if(myLotto.indexOf(bonusNumber) !== -1) return 7
        return 5
    }

    printResult(){
        this.winCounts.push(this.resultLottos.reduce((count, element) => count + (3 === element), 0))
        MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.winCounts[0]}개`);
        this.winCounts.push(this.resultLottos.reduce((count, element) => count + (4 === element), 0))
        MissionUtils.Console.print(`4개 일치 (50,000원) - ${this.winCounts[1]}개`);
        this.winCounts.push(this.resultLottos.reduce((count, element) => count + (5 === element), 0))
        MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${this.winCounts[2]}개`);
        this.winCounts.push(this.resultLottos.reduce((count, element) => count + (7 === element), 0))
        MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.winCounts[3]}개`);
        this.winCounts.push(this.resultLottos.reduce((count, element) => count + (6 === element), 0))
        MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${this.winCounts[4]}개`);
    }

    earningsRate(price){
        this.winCounts.map((element,index) =>{
            this.profit = element*this.prizeMoney[index] + this.profit;
        })
        const EARNING_RATE = ((this.profit/Number(price))*100).toFixed(1);
        MissionUtils.Console.print(`총 수익률은 ${EARNING_RATE}%입니다.`);
        MissionUtils.Console.close();
    }
}

module.exports = ResultLotto;