const {Console} = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto")
const {INPUT_MESSAGE, ERROR_MESSAGE} = require("./Constants")
const {INPUT_BONUS_NUMBER, INPUT_WINNING_NUMBER} = INPUT_MESSAGE;
const {NOT_ONE_NUMBER, NOT_BETWEEN_NUMBER} = ERROR_MESSAGE;

class InputWinningNumber{
    constructor(){
        this.winningNum;
        this.bonusNum;
    }
    winningNumber(){
        Console.readLine(INPUT_WINNING_NUMBER,(num) => {
            num = num.split(',').map(Number);
            this.validateNum(num);
            this.winningNum = num;
        })
    }

    bonusNumber(){
        Console.readLine(INPUT_BONUS_NUMBER, (num) => {
            num = num.split(',').map(Number);
            this.bonusNumExceptions(num);
            this.bonusNum = num;
        })
    }

    validateNum(winningNum){
        new Lotto(winningNum);
        this.winningNum = winningNum;
    }

    bonusNumExceptions(num){
        if(num.length !== 1){
            throw new Error(NOT_ONE_NUMBER);
        }
        if(num < 1 || num > 45){
            throw new Error(NOT_BETWEEN_NUMBER);
        }
        if(isNaN(num)){
            throw new Error("[ERROR]")
        }
    }
}

module.exports = InputWinningNumber;