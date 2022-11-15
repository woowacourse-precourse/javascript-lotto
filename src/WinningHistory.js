const { Console } = require("@woowacourse/mission-utils");
const NumberCompare = require("./NumberCompare");
const UserInputNumber = require("./UserInputNumber");
const {REWARD_MESSAGE, REWARD_MONEY, THOUSAND, HUNDRED } = require("./Constants");
const {WINNING_STATISTICS ,MATCH_SIX ,MATCH_SIX_AND_BONUS, MATCH_FIVE, MATCH_FOUR, MATCH_THREE } = REWARD_MESSAGE;
const {FIFTH_PLACE, FOURTH_PLACE, THIRD_PLACE, SECOND_PLACE, FIRST_PLACE} = REWARD_MONEY;


class WinningHistory{
    constructor(){
        this.numberCompare = new NumberCompare();
        this.userInputNumber = new UserInputNumber();
    }
    
    printLottoStats(lottoRanking, issudLotto){
        Console.print(WINNING_STATISTICS)
        this.fifthPlace(lottoRanking);
        this.fourthPlace(lottoRanking);
        this.thirdPlace(lottoRanking);
        this.secondPlace(lottoRanking);
        this.firstPlace(lottoRanking);
        this.lottoRevenue(lottoRanking, issudLotto);
    }

    fifthPlace(lottoRanking){
        Console.print(`${MATCH_THREE} ${lottoRanking[0]}개`);
    }

    fourthPlace(lottoRanking){
        Console.print(`${MATCH_FOUR} ${lottoRanking[1]}개`);
    }

    thirdPlace(lottoRanking){
        Console.print(`${MATCH_FIVE} ${lottoRanking[2]}개`);
    }
    
    secondPlace(lottoRanking){
        Console.print(`${MATCH_SIX_AND_BONUS} ${lottoRanking[3]}개`);
    }

    firstPlace(lottoRanking){
        Console.print(`${MATCH_SIX} ${lottoRanking[4]}개`);
    }

    lottoRevenue(lottoRanking, issudLotto){
        let revenue = 
        lottoRanking[0] * FIFTH_PLACE +
        lottoRanking[1] * FOURTH_PLACE +
        lottoRanking[2] * THIRD_PLACE +
        lottoRanking[3] * SECOND_PLACE +
        lottoRanking[4] * FIRST_PLACE;

        let revenueTotal = revenue/(issudLotto * THOUSAND) * HUNDRED ;
        this.lottoRevenueRound(revenueTotal);
    }

    lottoRevenueRound(revenueTotal){
        let revenueRound = revenueTotal.toFixed(1);
        Console.print(`총 수익률은 ${revenueRound}%입니다.`);
    }
}

module.exports = WinningHistory;