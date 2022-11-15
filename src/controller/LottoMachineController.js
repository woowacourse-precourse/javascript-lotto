const { generateSortedRandomNumber } = require('../utils/lottoGameHandler.js');
const { LOTTO_RANKING_REWARD, RANKING_ACCORDING_MATCH_COUNT } = require('../constants/index.js');
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
    const lottoResult = this.generateLottoResultObject();
    this.purchasedLottos.forEach((lotto) => {
      const matchCount = lotto.checkHowManyCorrect(winningNumber, bonusNumber);
      const ranking = RANKING_ACCORDING_MATCH_COUNT[matchCount];

      if (lottoResult[ranking] === undefined) return;

      lottoResult[ranking] += 1;
    });

    this.calculateTotalPrizeMoney();
    this.view.outputView.printLottoGameResult(lottoResult, this.calculateYield.bind(this));
  }

  generateLottoResultObject() {
    const lottoResult = [];

    for (let ranking of Object.keys(LOTTO_RANKING_REWARD)) {
      lottoResult[ranking] = 0;
    }

    return lottoResult;
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
