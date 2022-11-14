const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.money = 0;
  }

  setMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      this.money = Number(input);
      // console.log(this.money);
    }); 
  }

  play() {
    this.setMoney();
  }
}

/* 나중에 지울 코드 */
const app = new App();
app.play();
/*******************/

module.exports = App;
