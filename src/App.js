const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const LottoStore = require("./LottoStore");
const LottoDraw = require("./LottoDraw");

class App {
  constructor() {  
    this.store = new LottoStore();
    this.draw = new LottoDraw();
    this.purchasedLottos = [];
  }

  play() {
    this.buyLotto();
  }

  buyLotto() {
    MissionUtils.Console.readLine('구입 금액을 입력해 주세요.', (answer) => {
      const money = Number(answer);
      this.purchasedLottos = this.store.buy(money);

      this.input_winningNum();
    })
  }
  
  input_winningNum() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (answer) => {
      const numbers = answer.split(',').map(Number);

      this.draw.setWinningNums(numbers);

      this.input_bonusNum();
     });
  }
  input_bonusNum() {
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (answer) => {
      const number = Number(answer);

      this.draw.setBonusNum(number);

      this.draw.checkResult(this.purchasedLottos);
    });
  }
}

module.exports = App;
