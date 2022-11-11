const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.cost();
  }
  cost(){
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (money)=>{
    });
  }
}

module.exports = App;
