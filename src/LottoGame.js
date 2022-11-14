const { Console } = require("@woowacourse/mission-utils");
const { REQUEST_MESSAGE } = require("./constants/message.js");
const { LOTTO_PRIZE_MATCH_COUNT, LOTTO_PRIZE_MONEY } = require("./constants/condition.js");
const LottoGameView = require("./LottoGameView.js");
const Validation = require("./Validation.js");
const LottoPerchaseMachine = require("./LottoPurchaseMachine.js");
const WinningLotto = require("./WinningLotto.js");

class LottoGame {
  lottos;
  winningNumbers;
  bonusNumber;

  constructor() {
    this.LottoGameView = new LottoGameView();
    this.lottoPerchaseMachine = new LottoPerchaseMachine();
    this.winningLotto = new WinningLotto();
  }

  play() {
    this.purchaseLottoPhase();
  }

  purchaseLottoPhase() {
    this.LottoGameView.requestInput(REQUEST_MESSAGE.PURCHASE_AMOUNT, (purchaseAmount) => {
      this.lottoPerchaseMachine.insertMoney(purchaseAmount);
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
    const eachCompareResult = eachLottoNumbers.map(this.getCompareResult.bind(this));
    const eachCalculatedLottoPrize = eachCompareResult.map(this.getCalculatedLottoPrize);
    const prizeStatistics = this.getPrizeStatistics(eachCalculatedLottoPrize);
    const totalPrizeMoney = this.getTotalPrizeMoney(prizeStatistics);
    const yieldRatio = this.getYieldRatio(totalPrizeMoney);
    const prizeStatisticsTemplates = this.getPrizeStatisticsTemplates(prizeStatistics);

    this.LottoGameView.printPrizeStatistics(prizeStatisticsTemplates);
    this.LottoGameView.printYieldRatio(yieldRatio);
    Console.close();
  }
  getEachLottoNumbers() {
    return this.lottos.map((lotto) => lotto.getNumbers());
  }
  getCompareResult(lottoNumbers) {
    const matchedLottoNumberCount = this.getMatchedLottoNumberCount(lottoNumbers);
    const hasBonusNumber = this.hasBonusNumber(lottoNumbers);

    return { matchedLottoNumberCount, hasBonusNumber };
  }
  getMatchedLottoNumberCount(lottoNumbers) {
    return lottoNumbers.filter((number) => this.winningNumbers.includes(number)).length;
  }
  hasBonusNumber(lottoNumbers) {
    return lottoNumbers.includes(this.bonusNumber);
  }
  getCalculatedLottoPrize(compareResult) {
    const { matchedLottoNumberCount, hasBonusNumber } = compareResult;

    if (matchedLottoNumberCount === LOTTO_PRIZE_MATCH_COUNT.firstPlace) return "firstPlace";
    if (matchedLottoNumberCount === LOTTO_PRIZE_MATCH_COUNT.thirdPlace && hasBonusNumber) {
      return "secondPlace";
    }
    if (matchedLottoNumberCount === LOTTO_PRIZE_MATCH_COUNT.thirdPlace) return "thirdPlace";
    if (matchedLottoNumberCount === LOTTO_PRIZE_MATCH_COUNT.fourthPlace) return "fourthPlace";
    if (matchedLottoNumberCount === LOTTO_PRIZE_MATCH_COUNT.fifthPlace) return "fifthPlace";

    return "fail";
  }
  getPrizeStatistics(eachCalculatedLottoPrize) {
    const prizeStatistics = {
      fifthPlace: 0,
      fourthPlace: 0,
      thirdPlace: 0,
      secondPlace: 0,
      firstPlace: 0,
      fail: 0,
    };

    eachCalculatedLottoPrize.forEach((lottoPrize) => (prizeStatistics[lottoPrize] += 1));

    return prizeStatistics;
  }
  getTotalPrizeMoney(prizeStatistics) {
    let totalPrizeMoney = 0;

    for (const [prize, count] of Object.entries(prizeStatistics)) {
      const prizeMoney = LOTTO_PRIZE_MONEY[prize] * count;
      totalPrizeMoney += prizeMoney;
    }

    return totalPrizeMoney;
  }
  getYieldRatio(totalPrizeMoney) {
    if (totalPrizeMoney) {
      return ((totalPrizeMoney / this.purchaseAmount) * 100).toFixed(1);
    }

    return 0;
  }
  getPrizeStatisticsTemplates(prizeStatistics) {
    const templates = [
      `${
        LOTTO_PRIZE_MATCH_COUNT.fifthPlace
      }개 일치 (${LOTTO_PRIZE_MONEY.fifthPlace.toLocaleString()}원) - ${
        prizeStatistics.fifthPlace
      }개`,
      `${
        LOTTO_PRIZE_MATCH_COUNT.fourthPlace
      }개 일치 (${LOTTO_PRIZE_MONEY.fourthPlace.toLocaleString()}원) - ${
        prizeStatistics.fourthPlace
      }개`,
      `${
        LOTTO_PRIZE_MATCH_COUNT.thirdPlace
      }개 일치 (${LOTTO_PRIZE_MONEY.thirdPlace.toLocaleString()}원) - ${
        prizeStatistics.thirdPlace
      }개`,
      `${
        LOTTO_PRIZE_MATCH_COUNT.thirdPlace
      }개 일치, 보너스 볼 일치 (${LOTTO_PRIZE_MONEY.secondPlace.toLocaleString()}원) - ${
        prizeStatistics.secondPlace
      }개`,
      `${
        LOTTO_PRIZE_MATCH_COUNT.firstPlace
      }개 일치 (${LOTTO_PRIZE_MONEY.firstPlace.toLocaleString()}원) - ${
        prizeStatistics.firstPlace
      }개`,
    ];

    return templates;
  }
}

module.exports = LottoGame;
