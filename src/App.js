const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {}

  InputMoney(){
    MissionUtils.Console.readLine('구입 금액을 입력해주세요 : ', (money) => {
      this.money = parseInt(money);
      let amount = money/1000;
    });
  }
}

module.exports = App;