const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.money = 0;
  }

  setMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      const money = Number(input);
      if (money % 1000 !== 0) throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
      this.money = money;
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
