const { Console } = require("@woowacourse/mission-utils");
const NumberCompare = require("./NumberCompare");


class WinningHistory{
    constructor(){
        this.numberCompare = new NumberCompare();
        this.lottoRanking = this.numberCompare.getLottoRanking();
    }
    
    printLottoStats(){
        this.fifthPlace();
        this.fourthPlace();
        this.thirdPlace();
        this.secondPlace();
        this.firstPlace();
    }

    fifthPlace(){
        Console.print(`3개 일치 (5,000원) - ${this.lottoRanking[0]}개`);
    }

    fourthPlace(){
        Console.print(`4개 일치 (50,000원) - ${this.lottoRanking[1]}개`);
    }

    thirdPlace(){
        Console.print(`5개 일치 (1,500,000원) - ${this.lottoRanking[2]}개`);
    }
    
    secondPlace(){
        Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.lottoRanking[3]}개`);
    }

    firstPlace(){
        Console.print(`6개 일치 (2,000,000,000원) - ${this.lottoRanking[4]}개`);
    }

    lottoRevenue(issuedLotto){
        let revenue = 
        this.lottoRanking[0] * 5000 +
        this.lottoRanking[1] * 50000 +
        this.lottoRanking[2] * 1500000 +
        this.lottoRanking[3] * 30000000 +
        this.lottoRanking[4] * 2000000000 ;

        let revenueTotal = revenue/(issuedLotto * 1000) * 100 ;
        return revenueTotal;
    }

    lottoRevenueRound(revenueTotal){
        let revenueRound = revenueTotal.toFixed(1);
        Console.print(`총 수익률은 ${revenueRound}입니다.`);
    }
    
}

module.exports = WinningHistory;