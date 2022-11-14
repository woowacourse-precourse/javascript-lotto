const MissionUtils = require("@woowacourse/mission-utils");

class UserInput {

  getMoney(){
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.",(UserAmount)=>{
      const purchaseAmount = parseInt(UserAmount);
      // 유효성 검사 넣기
      return purchaseAmount;
    })

  }

  getWinningNumbers(){
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.",(winningNums)=>{
      const winningNumbers = winningNums.split(',').map((v)=>parseInt(v)) ;
      // 유효성 검사 넣기
      return winningNumbers;
    })

  }

  getBonusNumber(){
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.",(bonusNum)=>{
      const bonusNumber = parseInt(bonusNum);
      // 유효성 검사 넣기
      return bonusNumber;
  })
  }
}

module.exports=UserInput;