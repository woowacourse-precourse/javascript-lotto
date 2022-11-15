const { Console } = require("@woowacourse/mission-utils");
const { REQUEST_MESSAGE } = require("../constants/message.js");
const LottoGameView = require("../view/LottoGameView.js");
const LottoPerchaseMachine = require("../domain/LottoPurchaseMachine.js");
const PrizeCalculator = require("../domain/PrizeCalculator.js");
const Statistics = require("../domain/Statistics.js");
const WinningLotto = require("../WinningLotto.js");

class LottoGame {
  playerLottos;
  purchaseAmount;

  constructor() {
    this.LottoGameView = new LottoGameView();
    this.lottoPerchaseMachine = new LottoPerchaseMachine();
    this.winningLotto = new WinningLotto();
    this.prizeCalculator = new PrizeCalculator();
    this.statistics = new Statistics();
  }

  play() {
    this.purchaseLottoPhase();
  }

  purchaseLottoPhase() {
    this.LottoGameView.requestInput(REQUEST_MESSAGE.PURCHASE_AMOUNT, (purchaseAmount) => {
      this.purchaseAmount = purchaseAmount;

      this.lottoPerchaseMachine.insertMoney(this.purchaseAmount);
      this.playerLottos = this.lottoPerchaseMachine.purchaseLottos();

      this.LottoGameView.printLottoQuantity(this.playerLottos.length);
      this.LottoGameView.printEachPlayerLottoNumbers(this.getEachPlayerLottoNumbers());

      this.setWinningNumbersPhase();
    });
  }

  setWinningNumbersPhase() {
    this.LottoGameView.requestInput(REQUEST_MESSAGE.WINNING_NUMBERS, (winningNumbers) => {
      this.winningLotto.setWinningNumbers(winningNumbers);

      this.setBonusNumberPhase();
    });
  }

  setBonusNumberPhase() {
    this.LottoGameView.requestInput(REQUEST_MESSAGE.BONUS_NUMBER, (bonusNumber) => {
      this.winningLotto.setBonusNumber(bonusNumber);

      this.prizeCalculatePhase();
    });
  }

  prizeCalculatePhase() {
    const eachLottoPrize = this.prizeCalculator.calculatePrize(
      this.getEachPlayerLottoNumbers(),
      this.winningLotto.getWinningNumbers(),
      this.winningLotto.getBonusNumber()
    );

    this.statisticsPhase(eachLottoPrize);
  }

  statisticsPhase(eachLottoPrize) {
    this.statistics.makeStatisticsData(eachLottoPrize, this.purchaseAmount);

    this.LottoGameView.printPrizeStatistics(this.statistics.getPrizeStatisticsTemplates());
    this.LottoGameView.printYieldRatio(this.statistics.getYieldRatio());

    Console.close();
  }

  getEachPlayerLottoNumbers() {
    return this.playerLottos.map((lotto) => lotto.getNumbers());
  }
}

module.exports = LottoGame;
