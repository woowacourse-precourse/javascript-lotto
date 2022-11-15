const MissionUtils = require("@woowacourse/mission-utils");

class JackpotNum{
  winningList;
  constructor(){
      this.setJackpotNum();
  }
  setJackpotNum(){
      MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (answer)=>{
          this.winningList = answer.split(",");
      })
  }
}

module.exports = JackpotNum;