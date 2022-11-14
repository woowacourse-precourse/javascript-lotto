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

  play() {
    this.inputPurchaseAmount();
  }

  // 구입금액 입력 함수 구현
  inputPurchaseAmount() {
    MissionUtils.Console.readLine(INPUT_MESSAGES.PURCHASE_AMOUNT, (money) => {
      this.inputPurchaseAmountDivide(money);
      this.lottoMoney = money;
      this.buyLotto(money);
    })
  }

  // 입력된 금액이 1000원 단위로 나누어 지는지 확인하는 함수 구현
  inputPurchaseAmountDivide(money) {
    if (money % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.DIVIDE_ERROR);
    }
  }

  // 로또 구입 금액에 해당하는 만큼 로또를 발행하는 함수 구현
  buyLotto(money) {
    const lottoQuantity = money / 1000;
    MissionUtils.Console.print(`${lottoQuantity}개를 구입했습니다.`);
    this.createLotto(lottoQuantity);
  }

  createLotto(lottoQuantity) {
    for (let i = 0; i < lottoQuantity; i++) {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      MissionUtils.Console.print(lottoNumbers);
      this.lottos.push(lottoNumbers);
    }
    this.inputWinNumber();
  }

  // 당첨 번호를 입력하는 함수 구현
  inputWinNumber() {
    MissionUtils.Console.readLine(INPUT_MESSAGES.WINNING_NUMBER, (number) => {
      this.winNumber = number.split(",");
      new Lotto(this.winNumber);
      this.winNumber = this.winNumber.map((number) => parseInt(number));
      this.inputBonusNumber();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
