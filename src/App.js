const MissionUtils = require('@woowacourse/mission-utils');
const { Message } = require('./Message');

class App {
  inputMoney;

  constructor() {
    this.inputMoney = 0;
  }
  getMoney() {
    let money;
    MissionUtils.Console.readLine(`${Message.COST_MESSAGE}`, input => {
      money = input;
      this.validate(money);
      this.inputMoney = money;
    });
  }
  checkUnit(money) {
    if (money % 1000 === 0) return true;
    return false;
  }
  checkType(money) {
    if (Number.isInteger(Number(money))) return true;
    return false;
  }
  checkRange(money) {
    if (money >= 1000) return true;
    return false;
  }
  validate(money) {
    if (!this.checkRange(money)) throw new Error(Message.ERROR_COST_RANGE);
    if (!this.checkUnit(money)) throw new Error(Message.ERROR_COST_UNIT);
    if (!this.checkType(money)) throw new Error(Message.ERROR_COST_TYPE);
  }

  play() {
    this.getMoney();
  }
}
const app = new App();
app.play();
module.exports = App;
