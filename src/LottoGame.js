const { Console } = require("@woowacourse/mission-utils");
const { REQUEST_MESSAGE } = require("./constants/message.js");
const LottoGameView = require("./LottoGameView.js");
const LottoPerchaseMachine = require("./LottoPurchaseMachine.js");
const WinningLotto = require("./WinningLotto.js");
const LottoDrawMachine = require("./LottoDrawMachine.js");
const StatisticsMachine = require("./StatisticsMachine.js");

class LottoGame {
  lottos;
  purchaseAmount;
  winningNumbers;
  bonusNumber;

  constructor() {
    this.LottoGameView = new LottoGameView();
    this.lottoPerchaseMachine = new LottoPerchaseMachine();
    this.winningLotto = new WinningLotto();
    this.lottoDrawMachine = new LottoDrawMachine();
    this.statisticsMachine = new StatisticsMachine();
  }

  play() {
    this.purchaseLottoPhase();
  }

  purchaseLottoPhase() {
    this.LottoGameView.requestInput(REQUEST_MESSAGE.PURCHASE_AMOUNT, (purchaseAmount) => {
      this.purchaseAmount = purchaseAmount;

      this.lottoPerchaseMachine.insertMoney(this.purchaseAmount);
      this.lottos = this.lottoPerchaseMachine.purchaseLottos();

      this.LottoGameView.printLottoQuantity(this.lottos.length);
      this.LottoGameView.printEachLottoNumbers(this.lottos);

      this.setWinningNumbersPhase();
    });
  }

  setWinningNumbersPhase() {
    this.LottoGameView.requestInput(REQUEST_MESSAGE.WINNING_NUMBERS, (winningNumbers) => {
      this.winningLotto.setWinningNumbers(winningNumbers);
      this.winningNumbers = this.winningLotto.getWinningNumbers();

      this.setBonusNumberPhase();
    });
  }

  setBonusNumberPhase() {
    this.LottoGameView.requestInput(REQUEST_MESSAGE.BONUS_NUMBER, (bonusNumber) => {
      this.winningLotto.setBonusNumber(bonusNumber);
      this.bonusNumber = this.winningLotto.getBonusNumber();

      this.drawLottoPhase();
    });
  }

  drawLottoPhase() {
    const eachLottoNumbers = this.getEachLottoNumbers();
    const eachLottoPrize = this.lottoDrawMachine.drawLotto(
      eachLottoNumbers,
      this.winningNumbers,
      this.bonusNumber
    );

    this.statisticsPhase(eachLottoPrize);
  }

  statisticsPhase(eachLottoPrize) {
    this.statisticsMachine.makeStatisticsData(eachLottoPrize, this.purchaseAmount);

    const prizeStatisticsTemplates = this.statisticsMachine.prizeStatisticsTemplates;
    const yieldRatio = this.statisticsMachine.yieldRatio;

    this.LottoGameView.printPrizeStatistics(prizeStatisticsTemplates);
    this.LottoGameView.printYieldRatio(yieldRatio);

    Console.close();
  }

  getEachLottoNumbers() {
    return this.lottos.map((lotto) => lotto.getNumbers());
  }
}

module.exports = LottoGame;
