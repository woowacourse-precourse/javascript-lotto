const {Console} = require("@woowacourse/mission-utils");
const INPUT_WINNING_NUMBER = "당첨 번호를 입력해 주세요."
const INPUT_BONUS_NUMBER = "보너스 번호를 입력해 주세요." 

class InputWinningNumber{

    constructor(){
        this.winningNum = [];
        this.bonusNum = [];
    }

    winningNumber(){
        Console.readLine(INPUT_WINNING_NUMBER, (num) => {
            return this.winningNum.push(num);
        })
    }

    bonusNumber(){
        Console.readLine(INPUT_BONUS_NUMBER, (num) => {
            return this.bonusNum.push(num);
        })
    }

    getWinningNum(){
        return this.winningNum;
    }

    getBonusNum(){
        return this.bonusNum;
    }
}

module.exports = InputWinningNumber;