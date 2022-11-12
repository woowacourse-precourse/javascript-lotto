const { Console } = require("@woowacourse/mission-utils");
const NumberCompare = require("./NumberCompare");


class WinningHistory{
    constructor(){
        this.numberCompare = new NumberCompare();
        this.lottoRanking = this.numberCompare.getLottoRanking();
    }
    
    printLottoRanking(){
        this.fifthPlace();
    }

    fifthPlace(){
        Console.print(`3개 일치 (5,000원) - ${this.lottoRanking[0]}개`)
    }

    fourthPlace(){
        Console.print(`4개 일치 (50,000원) - ${this.lottoRanking[1]}개`)
    }
}