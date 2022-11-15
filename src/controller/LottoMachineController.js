const { generateSortedRandomNumber } = require('../utils/common.js');
const { RULES, LOTTO_RANKING_REWARD, RANKING_ACCORDING_MATCH_COUNT } = require('../constants/index.js');
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
      () => new Lotto(generateSortedRandomNumber(RULES.MIN_LOTTO_NUMBER, RULES.MAX_LOTTO_NUMBER, RULES.LOTTO_NUMS)),
    );

    this.view.outputView.printInformationPurchasedLotto(this.userBuyHowManyLotto, this.purchasedLottos);
    this.view.inputWinningNumberView.inputWinningNumberFromUser(this.judgePurchasedLottoOfResult.bind(this));
  }

  calculatesUserBuyHowManyLotto(purchaseAmount) {
    this.userBuyHowManyLotto = purchaseAmount / RULES.LOTTO_PRICE;
  }

  judgePurchasedLottoOfResult(winningNumber, bonusNumber) {
    const lottoResult = this.generateLottoResultObject();
    this.purchasedLottos.forEach((lotto) => {
      const matchCount = lotto.checkHowManyCorrect(winningNumber, bonusNumber);
      const ranking = RANKING_ACCORDING_MATCH_COUNT[matchCount];

      if (lottoResult[ranking] === undefined) return;

      lottoResult[ranking] += 1;
    });

    const profitRate = this.calculateTotalPrizeMoney(lottoResult);
    this.view.outputView.printLottoGameResult(lottoResult, profitRate);
  }

  generateLottoResultObject() {
    const lottoResult = [];

    for (let ranking of Object.keys(LOTTO_RANKING_REWARD)) {
      lottoResult[ranking] = 0;
    }

    return lottoResult;
  }

  calculateTotalPrizeMoney(lottoResult) {
    const totalProfit = Object.keys(lottoResult).reduce(
      (total, ranking) => (total += lottoResult[ranking] * LOTTO_RANKING_REWARD[ranking]),
      0,
    );

    return ((totalProfit / this.purchaseAmount) * 100).toFixed(1);
  }
}

module.exports = LottoMachineController;
