const LottoMachine = require("./LottoMachine");
const InputAcceptor = require("./InputAcceptor");
const MessagePrinter = require("./MessagePrinter");
const Matcher = require("./Matcher");
const ReturnCalculator = require("./ReturnCalculator");
const PURCHASE_UNIT = 1000;
class App {
  constructor() {
    this.lottoWallet = [];
    this.purchaseAmount = 0;
    this.numOfLotto = 0;
  }

  isValidNumOfLotto(purchaseAmount) {
    this.numOfLotto = purchaseAmount / PURCHASE_UNIT;
    if (!Number.isInteger(this.numOfLotto)) throw new Error('[ERROR] 구입 금액은 1000원 단위로 입력해주세요.');
  }

  async play() {
    this.purchaseAmount = await InputAcceptor.askPurchaseAmountAsyncAwait();
    this.isValidNumOfLotto(this.purchaseAmount);
    MessagePrinter.printPurchaseAmount(this.numOfLotto);
    this.lottoWallet = LottoMachine.createLottos(this.numOfLotto);
    MessagePrinter.printAllLottos(this.lottoWallet);
    const winningNumbers = await InputAcceptor.askWinningLottoNumbers();
    const winningBonusNumber = await InputAcceptor.askWinningLottoBonusNumber(winningNumbers);
    const matcher = new Matcher(winningNumbers, winningBonusNumber);
    const result = matcher.getMatchResult(this.lottoWallet);
    MessagePrinter.printResultStatistics(result);
    const lottoReturn = ReturnCalculator.getReturn(result, this.purchaseAmount);
    MessagePrinter.printReturn(lottoReturn);
  }
}

module.exports = App;
