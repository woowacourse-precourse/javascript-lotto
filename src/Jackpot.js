const MissionUtils = require("@woowacourse/mission-utils");

class JackpotNum{
  winningList;
  constructor(){
      this.setJackpotNum();
  }
  setJackpotNum(){
      MissionUtils.Console.readLine((answer)=>{
          this.winningList = answer.split(",");
      })
  }
}

module.exports = JackpotNum;