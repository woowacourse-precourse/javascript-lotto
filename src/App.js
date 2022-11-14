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
      this.로또구입(answer);
    });
  }
  async 로또구입(answer) {
    let result = await lottoLogic.purchased(answer);
    this.purchasedLotto = result;
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (answer) => {
      this.번호선택(answer);
    });
  }
  async 번호선택(answer) {
    let result = await lottoLogic.사용자번호선택(answer);
    this.winningNumber = result;
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (answer) => {
      this.보너스번호(answer);
    });
  }
  보너스번호(answer) {
    if (answer < 1 || answer > 45) {
      throw new Error('[ERROR] 1~45 수를 입력해주세요. ');
    }
    this.bonusNumber = answer;
  }
}
const app = new App();
app.play();
module.exports = App;
