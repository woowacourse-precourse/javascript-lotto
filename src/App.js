const Lotto = require('./Lotto');
const MissionUtils = require('@woowacourse/mission-utils');
class App {
  play() {
    const money = this.getMoney();
  }

  getMoney() {
    let money = 0;
    MissionUtils.Console.readLine('구매금액을 입력해주세요:', (answer) => {
      money = answer;
      this.isValidMoney(money);
    });
  }
  isValidMoney(money) {
    if (Number.isNaN(money)) {
      throw `[ERROR] 입력 금액이 숫자형태가 아닙니다.`;
    }
    if (money % 1000 !== 0) {
      throw `[ERROR] 천원 단위로 금액을 지불해주세요.`;
    }
    if (money > 1000000) {
      throw `[ERROR] 한 번에 최대로 구입할 수 있는 금액은 100만원 입니다. 입력한 금액: ${money}`;
    }
    if (money < 1000) {
      throw `[ERROR] 로또 한장의 가격은 1000원입니다. 입력한 금액: ${money}`;
    }
  }
}
const app = new App();
app.play();

module.exports = App;
