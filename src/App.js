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
      // 이후 로직 작성 예정
    })
  }
}

const app = new App();
app.play();

module.exports = App;
