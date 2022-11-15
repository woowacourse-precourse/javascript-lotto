const MissionUtils = require("@woowacourse/mission-utils");
const LottoStore = require("./LottoStore");
const Lotto = require("./Lotto");

class App {
  constructor() {  
    this.store = new LottoStore();
    this.purchasedLottos = [];

  }

  play() {
    this.buyLotto();
  }

  buyLotto() {
    MissionUtils.Console.readLine('구입 금액을 입력해 주세요.', (answer) => {
        const money = Number(answer);
        this.purchasedLottos = this.store.buy(money);
    })
  }
  
  input_winningNum() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (answer) => {
      const numbers = answer.split(',').map(Number);

      this.store.setWinningNum(numbers);

      input_bonusNum();
     });
  }
  input_bonusNum() {
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (answer) => {
      const number = Number(answer);

      this.store.setBonusNum(number);
    });
  }
}

module.exports = App;
