const MissionUtils = require('@woowacourse/mission-utils');
const { checkRange, checkUnit, checkType } = require('./Exception');
const Lotto = require('./Lotto');
const { Message } = require('./Message');

class App {
  inputMoney;
  userLottoList;

  constructor() {
    this.userLottoList = [];
  }

  validate(money) {
    if (!checkRange(money)) throw new Error(Message.ERROR_COST_RANGE);
    if (!checkUnit(money)) throw new Error(Message.ERROR_COST_UNIT);
    if (!checkType(money)) throw new Error(Message.ERROR_COST_TYPE);
    this.inputMoney = Number(money);
  }

  buyLottos(numLotto) {
    for (let i = 0; i < numLotto; i += 1) {
      this.userLottoList.push(new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)));
    }
  }
  play() {
    let money;
    MissionUtils.Console.readLine(`${Message.COST_MESSAGE}`, input => {
      money = input;
      this.validate(money);
      this.buyLottos(this.inputMoney / 1000);
      MissionUtils.Console.print(`${this.userLottoList.length}개를 구매했습니다.`);
      this.userLottoList.forEach(lotto => MissionUtils.Console.print(`[${lotto.getNumbers().join(', ')}]`));
    });
  }
}
const app = new App();
app.play();
module.exports = App;
