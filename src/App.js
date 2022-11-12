const MissionUtils = require("@woowacourse/mission-utils");

class App {
  money=0;

  play() {
    this.insertMoney();
  }

  insertMoney(){
    MissionUtils.Console.readLine('구입금액을 입력해 주세요. ', (answer) => {
      this.money = answer/1000;
  })
  }

}
const app = new App();
app.play();
module.exports = App;
