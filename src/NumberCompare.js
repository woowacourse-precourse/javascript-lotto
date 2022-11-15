const InputWinningNum = require("./InputWinningNum");
const CreateRandomLotto = require("./CreateRandomLotto");

class NumberCompare{
    constructor(){
        this.inputWinningNum = new InputWinningNum();
        this.createRandomLotto = new CreateRandomLotto();
        this.lottoRanking = [0, 0, 0, 0, 0];
    }

    lottoResults(createNum, winningNum, bonusNum){
        this.sameWinningNumBonusNum(winningNum, bonusNum);
        this.matchNumbers(createNum,winningNum,bonusNum);
    }

    sameWinningNumBonusNum(winningNum, bonusNum){
         if(winningNum.includes(bonusNum[0])){
            throw new Error("[ERROR] 당첨번호와 보너스번호의 숫자가 중복됩니다");
            }
        }
    
    matchNumbers(createNum, winningNum, bonusNum){
        for(let i = 0; i < createNum.length; i++){
            let duplicateNum = createNum[i].filter((el) => winningNum.includes(el));
            let duplicateBonusNum = createNum[i].filter((el) => bonusNum.includes(el));
            this.matchThreeNumbers(duplicateNum);
            this.matchFourNumbers(duplicateNum);
            this.matchFiveNumbers(duplicateNum);
            this.matchFiveAndBonusNumbers(duplicateNum, duplicateBonusNum);
            this.matchSixNumbers(duplicateNum);
        }
        return this.lottoRanking;
    }

    matchThreeNumbers(duplicateNum){
        if(duplicateNum.length == 3){
            this.lottoRanking[0] += 1;
        }
    }

    matchFourNumbers(duplicateNum){
        if(duplicateNum.length == 4){
            this.lottoRanking[1] += 1;
        }
    }

    matchFiveNumbers(duplicateNum){
        if(duplicateNum.length == 5){
            this.lottoRanking[2] += 1;
        }
    }

    matchFiveAndBonusNumbers(duplicateNum, duplicateBonusNum){
        if(duplicateNum.length == 5 && duplicateBonusNum.length == 1){
            this.lottoRanking[3] += 1;
        }
    }

    matchSixNumbers(duplicateNum){
        if(duplicateNum.length == 6){
            this.lottoRanking[4] += 1;
        }
    }
}




module.exports = NumberCompare;