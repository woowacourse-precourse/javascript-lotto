const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const {
  INPUT_MESSAGES,
  ERROR_MESSAGES,
  PRIZE_REWARDS,
  STATISTIC,
  PRIZE_RESULTS,
} = require("./utils/constants");

class App {

  constructor() {
    this.lottos = [];
    this.winNumber = 0;
    this.bonusNumber = 0;
    this.result = {};
    this.lottoMoney = 0;
  }

  play() { }

  // 구입금액 입력 함수 구현
  inputPurchaseAmount() {
    MissionUtils.Console.readLine(INPUT_MESSAGES.PURCHASE_AMOUNT, (money) => {
      this.lottoMoney = money;
    })
  }

  // 입력된 금액이 1000원 단위로 나누어 지는지 확인하는 함수 구현
  inputPurchaseAmountDivide(money) {
    if (money % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.DIVIDE_ERROR);
    }
  }

  // 로또 구입 금액에 해당하는 만큼 로또를 발행하는 함수 구현
}

const app = new App();
app.play();

module.exports = App;
