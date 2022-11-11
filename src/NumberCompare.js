const InputWinningNumber = require("./InputWinninNumber");
const CreateRandomLotto = require("./CreateRandomLotto");

class NumberCompare{
    constructor(){
        this.inputWinningNumber = new InputWinningNumber();
        this.createRandomLotto = new CreateRandomLotto();
        this.lottoRanking = [0, 0, 0, 0, 0];
    }

    lottoResults(){
        this.matchThreeNumbers(createNum,winningNum);
        this.matchFourNumbers(createNum, winningNum);
        this.matchFiveNumbers(createNum, winningNum);
        this.matchFiveAndBonusNumbers(createNum, winningNum, bonusNum);
        this.matchSixNumbers(createNum, winningNum);
        this.lottoRanking;
    }

    matchThreeNumbers(createNum, winningNum){
        let duplicateNum = createNum.filter((el) => winningNum.includes(el));
        if(duplicateNum.length == 3){
            this.lottoRanking[0] += 1;
        }
    }

    matchFourNumbers(createNum, winningNum){
        let duplicateNum = createNum.filter((el) => winningNum.includes(el));
        if(duplicateNum.length == 4){
            this.lottoRanking[1] += 1;
        }
    }

    matchFiveNumbers(createNum, winningNum){
        let duplicateNum = createNum.filter((el) => winningNum.includes(el));
        if(duplicateNum.length == 5){
            this.lottoRanking[2] += 1;
        }
    }

    matchFiveAndBonusNumbers(createNum, winningNum, bonusNum){
        let duplicateNum = createNum.filter((el) => winningNum.includes(el));
        let duplicateBonusNum = createNum.filter((el) => bonusNum.includes(el));
        if(duplicateNum.length == 5 && duplicateBonusNum.length == 1){
            this.lottoRanking[3] += 1;
        }
    }

    matchSixNumbers(createNum, winningNum){
        let duplicateNum = createNum.filter((el) => winningNum.includes(el));
        if(duplicateNum.length == 6){
            this.lottoRanking[4] += 1;
        }
    }

    getLottoRanking(){
        return this.lottoRanking;
    }
}




module.exports = NumberCompare;