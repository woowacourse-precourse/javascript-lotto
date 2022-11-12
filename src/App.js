const { Console } = require("@woowacourse/mission-utils");
const LottoMachine = require("./domain/LottoMachine");
const Lotto = require("./Lotto");
const Utils = require("./Utils");

const MESSAGE = Object.freeze({
  PLEASE_MONEY: "구입금액을 입력해 주세요.\n",
});

const ERROR = Object.freeze({
  MONEY_NOT_NUMBER: "[ERROR] 금액은 숫자여야 합니다.",
});

class App {
  constructor() {
    this.lottoMachine = new LottoMachine();
  }

  play() {
    Console.readLine(MESSAGE.PLEASE_MONEY, this.pleaseMoney.bind(this));
  }

  isValidMoney(money) {
    if (Number.isNaN(Number(money))) {
      throw new Error(ERROR.MONEY_NOT_NUMBER);
    }
  }

  pleaseMoney(money) {
    this.isValidMoney(money);
    this.printPurchasedLottos(money);
    Console.readLine(
      "\n당첨 번호를 입력해 주세요.\n",
      this.pleaseWinningNumbers.bind(this)
    );
  }

  printPurchasedLottos(money) {
    const lottos = this.lottoMachine.buy(money);
    const lottosAmount = lottos.length;
    Console.print(`\n${lottosAmount}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      const purchasedLotto = Utils.transformArrayToString(lotto);
      Console.print(purchasedLotto);
    });
  }

  pleaseWinningNumbers(inputNumbers) {
    const lotto = new Lotto(Utils.transformStringToNumberArray(inputNumbers));
  }
}

const app = new App();
app.play();

module.exports = App;
