const {Console} = require("@woowacourse/mission-utils");
const INPUT_WINNING_NUMBER = "당첨 번호를 입력해 주세요."

class WinningNumberInput{
    
    constructor(){
        this.winningNum = [];
    }

    winningNumber(){
        Console.readLine(INPUT_WINNING_NUMBER, (num) => {
            return this.winningNum.push(num);
        })
    }
}

module.exports = WinningNumberInput;