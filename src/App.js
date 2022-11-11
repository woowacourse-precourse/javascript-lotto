const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.cost();
  }
  cost(){
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (money)=>{
      this.costValidate(money);
    });
  }
  costValidate(money){
    if(money<1000){
      throw new Error("[ERROR] 최소 구입금액은 1000원 이상 이여야합니다");
    }
    if(money%1000!=0){
      throw new Error("[ERROR] 구입금액은 1000원 단위 이여야합니다");
    }
  }
}

module.exports = App;
