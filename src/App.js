const MissionUtils = require('@woowacourse/mission-utils');
const Computer = require('./Computer');
const { checkRange, checkUnit, checkType, checkLottoType } = require('./Exception');
const Lotto = require('./Lotto');
const { Message } = require('./Message');
const WinLotto = require('./WinLotto');

class App {
  inputMoney;
  userLottoList;
  winLotto;

  constructor() {
    this.userLottoList = [];
    this.winLotto = [];
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
  createWinLotto() {
    MissionUtils.Console.readLine(`\n${Message.LOTTO_MESSAGE}`, input => {
      const numbers = Array.from(input.split(','), Number);
      checkLottoType(numbers);
      this.winLotto = new WinLotto(numbers);
      MissionUtils.Console.readLine(`${Message.BONUS_MESSAGE}`, input => {
        this.winLotto.setBonusNumber(Number(input));
        MissionUtils.Console.print(Computer.userLottoRankResult(this.userLottoList, this.winLotto));
      });
    });
  }

  play() {
    MissionUtils.Console.readLine(`${Message.COST_MESSAGE}`, input => {
      this.validate(input);
      this.buyLottos(this.inputMoney / 1000);
      MissionUtils.Console.print(`\n${this.userLottoList.length}개를 구매했습니다.`);
      this.userLottoList.forEach(lotto => MissionUtils.Console.print(`[${lotto.getNumbers().join(', ')}]`));
      this.createWinLotto();
    });
  }
}
const app = new App();
app.play();
module.exports = App;
