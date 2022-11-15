const { Console, Random } = require("@woowacourse/mission-utils");
class App {
  constructor() {
    this.money = null;
    this.lotto = []; 
    this.winNum = [];
    this.bonusNum = null;
  }
  setMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n",(num) => {
      if (!/^\d+$/.test(num))
        throw new Error("[ERROR] 구입금액에 문자가 포함되어 있습니다.");
      const money = parseInt(num);
      if(money % 1000 !== 0)
        throw new Error("[ERROR] 구입금액 오류");
        this.money = money;
    })
  }

  play() {
    this.setMoney();
  }
}
const app = new App();
app.play();
module.exports = App;