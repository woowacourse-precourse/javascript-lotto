const Lotto = require('./Lotto');
const MissionUtils = require('@woowacourse/mission-utils');
class App {
  play() {
    const money = this.getMoney();
  }

  getMoney() {
    let money = 0;
    MissionUtils.Console.readLine('구매금액을 입력해주세요.', (answer) => {
      money = answer;
    });
  }
}
const app = new App();
app.play();

module.exports = App;
