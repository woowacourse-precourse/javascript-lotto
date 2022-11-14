const {Console} = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto")
const INPUT_WINNING_NUMBER = "당첨 번호를 입력해 주세요.";
const INPUT_BONUS_NUMBER = "보너스 번호를 입력해 주세요.";

class InputWinningNumber{
    constructor(){
        this.winningNum;
        this.bonusNum;
    }
    winningNumber(){
        Console.readLine(INPUT_WINNING_NUMBER,(num) => {
            num = num.split(',').map(Number);
            this.validateNum(num)
            this.winningNum = num;
        })
    }

    bonusNumber(){
        Console.readLine(INPUT_BONUS_NUMBER, (num) => {
            num = num.split(',').map(Number);
            this.bonusNum = num;
        })
    }

    validateNum(winningNum){
        new Lotto(winningNum);
        this.winningNum = winningNum;
    }
}

module.exports = InputWinningNumber;