const MissionUtils = require("@woowacourse/mission-utils");

class ResultLotto{
    constructor(){
        this.matchLottoCount = 0;
        this.resultLottos = [];
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
        this.printResult()
    }

    matchBonus(myLotto,bonusNumber){
        if(myLotto.indexOf(bonusNumber) !== -1) return 7
        return 5
    }

    printResult(){
        MissionUtils.Console.print(`당첨 통계`);
        let winCount = this.resultLottos.reduce((count, element) => count + (3 === element), 0);
        MissionUtils.Console.print(`3개 일치 (5,000원) - ${winCount}개`);
        winCount = this.resultLottos.reduce((count, element) => count + (4 === element), 0);
        MissionUtils.Console.print(`4개 일치 (50,000원) - ${winCount}개`);
        winCount = this.resultLottos.reduce((count, element) => count + (5 === element), 0);
        MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winCount}개`);
        winCount = this.resultLottos.reduce((count, element) => count + (7 === element), 0);
        MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winCount}개`);
        winCount = this.resultLottos.reduce((count, element) => count + (6 === element), 0);
        MissionUtils.Console.print(`6개 일치(2,000,000,000원) - ${winCount}개`);
    }
}
