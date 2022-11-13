const { Console } = require("@woowacourse/mission-utils");
const LottoMachine = require("./domain/LottoMachine");
const LottoStatistics = require("./domain/LottoStatistics");
const Lotto = require("./Lotto");
const Utils = require("./Utils");

const MESSAGE = Object.freeze({
  PLEASE_MONEY: "구입금액을 입력해 주세요.\n",
  PLEASE_WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  PLEASE_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
  BUY: "개를 구매했습니다.",
});

const ERROR = Object.freeze({
  MONEY_NOT_NUMBER: "[ERROR] 금액은 숫자여야 합니다.",
});

class App {
  constructor() {
    this.lottoMachine = new LottoMachine();
    this.buyingLottos = null;
    this.winningLotto = null;
    this.lottoStatistics = null;
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
    this.printBuyingLottos(money);
    Console.readLine(
      MESSAGE.PLEASE_WINNING_NUMBERS,
      this.pleaseWinningNumbers.bind(this),
    );
  }

  printBuyingLottos(money) {
    this.buyingLottos = this.lottoMachine.buy(money);
    const lottosAmount = this.buyingLottos.length;
    Console.print(`\n${lottosAmount}${MESSAGE.BUY}`);
    this.buyingLottos.forEach((buyingLotto) => {
      Console.print(Utils.transformArrayToString(buyingLotto));
    });
  }

  pleaseWinningNumbers(inputWinningNumbers) {
    this.winningLotto = new Lotto(
      Utils.transformStringToNumberArray(inputWinningNumbers),
    );
    Console.readLine(
      MESSAGE.PLEASE_BONUS_NUMBER,
      this.pleaseBonusNumber.bind(this),
    );
  }

  pleaseBonusNumber(inputBonusNumber) {
    this.winningLotto.addBonusNumber(parseInt(inputBonusNumber, 10));
    this.printStatistics();
  }

  printStatistics() {
    this.lottoStatistics = new LottoStatistics(this.winningLotto);
    const rankCounter = this.lottoStatistics.createRankCounter(
      this.buyingLottos,
    );
    const profit = this.lottoStatistics.calculateProfit(this.buyingLottos);
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${rankCounter["5"] || 0}개`);
    Console.print(`4개 일치 (50,000원) - ${rankCounter["4"] || 0}개`);
    Console.print(`5개 일치 (1,500,000원) - ${rankCounter["3"] || 0}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCounter["2"] || 0}개`,
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${rankCounter["1"] || 0}개`);
    Console.print(`총 수익률은 ${Utils.formatProfit(profit)}%입니다.`);
    Console.close();
  }
}

module.exports = App;
