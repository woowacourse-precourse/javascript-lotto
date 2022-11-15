const { Console, Random } = require("@woowacourse/mission-utils");
class App {
  constructor() {
    this.money = null; // 금액 입력 숫자
    this.lotto = []; // 로또 배열로 받기
    this.winNum = []; //당첨숫자 배열로 받기
    this.bonusNum = null; //보너스 번호 숫자
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