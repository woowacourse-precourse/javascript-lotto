const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
class App {
  constructor() {
    this.myMoney = 0;
  }
  play() {
    this.start();
  }
  start() {
    let piece = 0;
    MissionUtils.Console.readLine("구입금액을 입력해 주세요. ", (answer) => {
      if (+answer % 1000 > 0) {
        throw new Error("[ERROR] 천원 단위로만 구매 가능합니다.");
      }

      this.myMoney += +answer;
      piece = +answer / 1000;
      if (isNaN(piece)) {
        throw new Error("[ERROR] 숫자만 입력 가능합니다.");
      }
      MissionUtils.Console.print(`${piece}개를 구매했습니다.`);
    });
  }
}
const app = new App();
app.play();
module.exports = App;
