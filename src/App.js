const MissionUtils = require("@woowacourse/mission-utils");

class LottoManage{
  inputPurchaseMoney(){
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n",(inputMoney)=>{
    })
  }
}

class App {
  constructor(){
    this.lottomanage = new LottoManage();
  }
  play() {
    this.lottomanage.inputPurchaseMoney();
  }
}

module.exports = App;
