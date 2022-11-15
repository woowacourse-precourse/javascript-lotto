const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('../src/Lotto');
const lottoLogic = new Lotto([1, 2, 3, 4, 5, 6]);

class App {
  constructor() {
    this.purchasedLotto = [];
    this.winningNumber = [];
    this.bonusNumber = [];
  }
  play() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (answer) => {
      this.buyLotto(answer);
    });
  }
  async buyLotto(answer) {
    let result = await lottoLogic.purchased(answer);
    this.purchasedLotto = result;
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (answer) => {
      this.luckyNumberSelect(answer);
    });
  }
  async luckyNumberSelect(answer) {
    let result = await lottoLogic.luckyNumberSplit(answer);
    lottoLogic.validate(result);
    this.winningNumber = result;
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (answer) => {
      this.bonusNumberSelect(answer);
    });
  }
  bonusNumberSelect(answer) {
    lottoLogic.validateBonusNumber(answer, this.winningNumber);
    this.bonusNumber = answer;
    lottoLogic.print('당첨 통계.');
    lottoLogic.calculationProcess(
      this.winningNumber,
      this.purchasedLotto,
      this.bonusNumber
    );
  }
}
const app = new App();
app.play();
module.exports = App;
