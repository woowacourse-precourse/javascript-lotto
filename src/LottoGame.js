const Lotto = require("./Lotto");
const { Random } = require("@woowacourse/mission-utils");
const MESSAGES = require("./Messages");
const { LOTTO_PRICE, LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER, PRIZE_CRITERIA, PRIZE_MONEY_PRICE} = require("./GameConstants");

class LottoGame {
  constructor(LottoGameView) {
    this.view = LottoGameView;
    this.lottos = [];
    this.purchaseAmount = null;
    this.lottoQuantity = null;
    this.winningLotto = null;
    this.bonusNumber = null;
    this.prizeCount = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    }
    this.totalYield = 0;
  }

  setPurchaseAmount(purchaseAmount) {
    this.validatePurchaseAmount(purchaseAmount);
    this.purchaseAmount = purchaseAmount;
  }

  validatePurchaseAmount(purchaseAmount) {
    if (Number.isNaN(purchaseAmount)) {
      throw new Error(MESSAGES.ERROR_LOTTO_GAME.NOT_NUMBER_AMOUNT);
    }

    if ((purchaseAmount < LOTTO_PRICE)) {
      throw new Error(MESSAGES.ERROR_LOTTO_GAME.MINIMUM_AMOUNT);
    }

    if (!Number.isInteger(purchaseAmount) || purchaseAmount % LOTTO_PRICE) {
      throw new Error(MESSAGES.ERROR_LOTTO_GAME.UNIT_OF_AMOUNT);
    }
  }
  
  issueLottos() {
    this.setLottoQuantity();
    while (this.lottos.length < this.lottoQuantity) {
      const lotto = this.getNewLotto();
      this.lottos.push(lotto);
    }

    this.view.printPurchasedLottos(this.lottoQuantity, this.lottos);
  }

  setLottoQuantity() {
    this.lottoQuantity = this.purchaseAmount / LOTTO_PRICE;
  }

  getNewLotto() {
    const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNumber.sort((a, b) => a - b);
    const lotto = new Lotto(lottoNumber);
    return lotto;
  }

  setWinningLotto(number) {
    const winningNumber = number.split(',').map((num) => Number(num));
    const winningLotto = new Lotto(winningNumber);
    this.winningLotto = winningLotto;
  }

  setBonusNumber(bonus) {
    this.validateBonusNumber(bonus);
    this.bonusNumber = Number(bonus);
  }

  validateBonusNumber(bonus) {
    if (Number.isNaN(Number(bonus))) {
      throw new Error(MESSAGES.ERROR_LOTTO_GAME.NOT_NUMBER_BONUS);
    }

    if (!Number.isInteger(Number(bonus))) {
      throw new Error(MESSAGES.ERROR_LOTTO_GAME.NOT_INTEGER_BONUS);
    }

    if (Number(bonus) < LOTTO_MIN_NUMBER || Number(bonus) > LOTTO_MAX_NUMBER) {
      throw new Error(MESSAGES.ERROR_LOTTO_GAME.OUT_OF_RANGE_BONUS);
    }

    this.duplicationBonusException(Number(bonus));
  }

  duplicationBonusException(bonus) {
    const winningNumber = this.winningLotto.getNumber();
    if (winningNumber.includes(bonus)) {
      throw new Error(MESSAGES.ERROR_LOTTO_GAME.DUPLICATION_BONUS);
    }
  }

  compareWinningLotto() {
    const winningNumber = this.winningLotto.getNumber();
    this.lottos.forEach((lotto) => {
      const lottoNumber = lotto.getNumber();
      const matchCount = this.getMatchCount(winningNumber, lottoNumber);
      const bonusMatch = lottoNumber.includes(this.bonusNumber);
      this.comparePrizeCriteria(matchCount, bonusMatch);
    });

    this.view.printWinningStatistics(this.prizeCount);
  }

  getMatchCount(winningNumber, lottoNumber) {
    let count = 0;
    winningNumber.forEach((winning) => {
      if (lottoNumber.includes(winning)) {
        count += 1;
      }
    })
    return count;
  }

  comparePrizeCriteria(matchCount, bonusMatch) {
    for (const criteria of Object.keys(PRIZE_CRITERIA)) {
      const winningCount = PRIZE_CRITERIA[criteria];
      if(matchCount === winningCount){
        this.increasePrizeCount(criteria, bonusMatch);
        return;
      }
    }
  }

  increasePrizeCount(criteria, bonusMatch) {
    if (criteria === 'SECOND_THIRD') {
      if (bonusMatch) {
        this.prizeCount.second += 1;
        return;
      }

      this.prizeCount.third += 1;
      return;
    }

    this.prizeCount[criteria.toLowerCase()] += 1;
  }

  setTotalYield() {
    this.totalYield = this.getTotalRevenue();
    this.totalYield = (this.totalYield / this.purchaseAmount) * 100;
    this.view.printYield(this.totalYield.toFixed(1));
  }

  getTotalRevenue() {
    let totalRevenue = 0;
    Object.keys(this.prizeCount).forEach((prize) => {
      totalRevenue += this.prizeCount[prize] * PRIZE_MONEY_PRICE[prize.toUpperCase()];
    });

    return totalRevenue;
  }
}

module.exports = LottoGame;
