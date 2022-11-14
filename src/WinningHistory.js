const { Console } = require("@woowacourse/mission-utils");
const NumberCompare = require("./NumberCompare");


class WinningHistory{
    constructor(){
        this.numberCompare = new NumberCompare();
    }
    
    printLottoStats(lottoRanking){
        this.fifthPlace(lottoRanking);
        this.fourthPlace(lottoRanking);
        this.thirdPlace(lottoRanking);
        this.secondPlace(lottoRanking);
        this.firstPlace(lottoRanking);
        this.lottoRevenue(lottoRanking);
    }

    fifthPlace(lottoRanking){
        Console.print(`3개 일치 (5,000원) - ${lottoRanking[0]}개`);
    }

    fourthPlace(lottoRanking){
        Console.print(`4개 일치 (50,000원) - ${lottoRanking[1]}개`);
    }

    thirdPlace(lottoRanking){
        Console.print(`5개 일치 (1,500,000원) - ${lottoRanking[2]}개`);
    }
    
    secondPlace(lottoRanking){
        Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoRanking[3]}개`);
    }

    firstPlace(lottoRanking){
        Console.print(`6개 일치 (2,000,000,000원) - ${lottoRanking[4]}개`);
    }

    lottoRevenue(lottoRanking){
        let revenue = 
        lottoRanking[0] * 5000 +
        lottoRanking[1] * 50000 +
        lottoRanking[2] * 1500000 +
        lottoRanking[3] * 30000000 +
        lottoRanking[4] * 2000000000 ;

        let revenueTotal = revenue/(8 * 1000) * 100 ;
        this.lottoRevenueRound(revenueTotal);
    }

    lottoRevenueRound(revenueTotal){
        let revenueRound = revenueTotal.toFixed(1);
        Console.print(`총 수익률은 ${revenueRound}%입니다.`);
    }
    
}

module.exports = WinningHistory;