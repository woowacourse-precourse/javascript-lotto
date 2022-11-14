const MissionUtils = require("@woowacourse/mission-utils");
class WinningNumber{
    winningList;
    constructor(){
        this.setWinningNumber();
    }
    setWinningNumber(){
        MissionUtils.Console.readLine((answer)=>{
            this.winningList = answer.split(",");
        })
    }
}
module.exports = WinningNumber;