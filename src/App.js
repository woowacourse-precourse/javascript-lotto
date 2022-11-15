const MissionUtils = require("@woowacourse/mission-utils");

class App {
  // 구입금액을 입력받음
  getMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (answer) => {
      return this.getLottoNumber(answer);
    });
  }

  // 로또의 개수를 구함
  getLottoNumber(money) {
    if (money % 1000 === 0) {
      return MissionUtils.Console.print(`${parseInt(money/1000)}개를 구매했습니다.`);
    } 
    throw new Error("[ERROR] 1,000원으로 나누어 떨어지지 않습니다.");
  }

  play() {
    this.getMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
