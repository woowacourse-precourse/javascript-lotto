const { Console, Random } = require("@woowacourse/mission-utils");
const { REQUEST_MESSAGE } = require("./constants/message.js");
const {
  LOTTO_PRICE,
  LOTTO_NUM_MIN_RANGE,
  LOTTO_NUM_MAX_RANGE,
  LOTTO_DIGITS,
  LOTTO_PRIZE_MATCH_COUNT,
  LOTTO_PRIZE_MONEY,
} = require("./constants/condition.js");
const LottoGameView = require("./LottoGameView.js");
const Lotto = require("./Lotto.js");
const Validation = require("./Validation.js");

class LottoGame {
  purchaseAmount;
  lottos;
  winningNumbers;
  bonusNumber;

  constructor() {
    this.LottoGameView = new LottoGameView();
  }

  play() {
    this.purchaseLottoPhase();
  }

  purchaseLottoPhase() {
    this.LottoGameView.requestInput(REQUEST_MESSAGE.PURCHASE_AMOUNT, (purchaseAmount) => {
      Validation.validatePurchaseAmount(purchaseAmount);
      this.purchaseAmount = Number(purchaseAmount);
      const lottoQuantity = this.getLottoQuantity(this.purchaseAmount);
      this.createLottos(lottoQuantity);
      this.LottoGameView.printLottoQuantity(lottoQuantity);
      this.LottoGameView.printEachLottoNumbers(this.lottos);

      this.saveWinningNumbersPhase();
    });
  }
  getLottoQuantity(purchaseAmount) {
    return purchaseAmount / LOTTO_PRICE;
  }
  generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(LOTTO_NUM_MIN_RANGE, LOTTO_NUM_MAX_RANGE, LOTTO_DIGITS);
  }
  createLottos(lottoQuantity) {
    this.lottos = Array.from({ length: lottoQuantity }, () => {
      const lottoNumbers = this.generateLottoNumbers();
      const ascendingNumbers = lottoNumbers.sort((numA, numB) => numA - numB);

      return new Lotto(ascendingNumbers);
    });
  }

  saveWinningNumbersPhase() {
    this.LottoGameView.requestInput(REQUEST_MESSAGE.WINNING_NUMBERS, (winningNumbers) => {
      const winningNumbersArr = winningNumbers.split(",");
      Validation.validateLottoNumber(winningNumbersArr);
      this.winningNumbers = winningNumbersArr.map(Number);

      this.saveBonusNumberPhase();
    });
  }
  saveBonusNumberPhase() {
    this.LottoGameView.requestInput(REQUEST_MESSAGE.BONUS_NUMBER, (bonusNumber) => {
      Validation.validateBonusNumber(bonusNumber, this.winningNumbers);
      this.bonusNumber = Number(bonusNumber);

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

    for (let [prize, count] of Object.entries(prizeStatistics)) {
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
}

module.exports = LottoGame;
