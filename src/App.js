const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  play() {
    this.lottoMoney();
  }

  lottoMoney() {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      Console.print(`\n${money/1000}개를 구매했습니다.`);
    });
  }
}

//const app = new App();
//app.play();

module.exports = App;
