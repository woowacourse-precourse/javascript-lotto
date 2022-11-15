const { generateSortedRandomNumber, checkHowManyCorrect } = require('../utils/lottoGameHandler.js');
const { LOTTO_RANKING_REWARD } = require('../constants/index.js');
const Lotto = require('../Lotto.js');
const InputMoneyView = require('../view/InputMoneyView.js');
const InputWinningNumberView = require('../view/InputWinningNumberView.js');
const OutputView = require('../view/OutputView.js');

class LottoMachineController {
  constructor() {
    this.view = {
      inputMoneyView: new InputMoneyView(),
      inputWinningNumberView: new InputWinningNumberView(),
      outputView: new OutputView(),
    };
  }

  start() {
    this.view.inputMoneyView.inputMoney(this.buyLotto.bind(this));
  }

  buyLotto(purchaseAmount) {
    this.purchaseAmount = purchaseAmount;
    this.calculatesUserBuyHowManyLotto(this.purchaseAmount);
    this.purchasedLottos = Array.from(
      { length: this.userBuyHowManyLotto },
      () => new Lotto(generateSortedRandomNumber(1, 45, 6)),
    );

    this.view.outputView.printInformationPurchasedLotto(this.userBuyHowManyLotto, this.purchasedLottos);
    this.view.inputWinningNumberView.inputWinningNumberFromUser(this.judgePrize.bind(this));
  }

  calculatesUserBuyHowManyLotto(purchaseAmount) {
    this.userBuyHowManyLotto = purchaseAmount / 1000;
  }

  judgePrize(winningNumber, bonusNumber) {
    this.winningNumber = winningNumber;
    this.bonusNumber = bonusNumber;

    const lottoResultData = this.purchasedLottos.map((lotto) =>
      checkHowManyCorrect(lotto, this.winningNumber, this.bonusNumber),
    );
    const lottoResult = this.generateLottoResultObject();
    this.mappingResult(lottoResultData);
    this.calculateTotalPrizeMoney();

    this.view.outputView.printLottoGameResult(this.lottoResultMap, this.calculateYield.bind(this));
  }

  generateLottoResultObject() {
    const lottoResult = [];

    for (let ranking of Object.keys(LOTTO_RANKING_REWARD)) {
      lottoResult[ranking] = 0;
    }

    return lottoResult;
  }

  mappingResult(lottoResultData) {
    lottoResultData.forEach((data) => {
      if (data.correctCount === 3) this.lottoResultMap['3개'] += 1;
      if (data.correctCount === 4) this.lottoResultMap['4개'] += 1;
      if (data.correctCount === 5 && data.bonusCount === 0) this.lottoResultMap['5개'] += 1;
      if (data.correctCount === 5 && data.bonusCount === 1) this.lottoResultMap['5개+보너스'] += 1;
      if (data.correctCount === 6) this.lottoResultMap['6개'] += 1;
    });
  }

  calculateTotalPrizeMoney() {
    this.totalPrizeMoney =
      5_000 * this.lottoResultMap['3개'] +
      50_000 * this.lottoResultMap['4개'] +
      1_500_000 * this.lottoResultMap['5개'] +
      30_000_000 * this.lottoResultMap['5개+보너스'] +
      2_000_000_000 * this.lottoResultMap['6개'];
  }

  calculateYield() {
    return ((this.totalPrizeMoney / this.purchaseAmount) * 100).toFixed(1);
  }
}

module.exports = LottoMachineController;
