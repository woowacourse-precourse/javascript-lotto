const MissionUtils = require("@woowacourse/mission-utils");
class WinningNumber{
    winningList;
    constructor(){
        this.setWinningNumber();
    }
    setWinningNumber(){
        MissionUtils.Console.readLine("당첨번호를 입력하세요",(answer)=>{
            this.winningList = answer.split(",");
        })
    }
}
module.exports = WinningNumber;