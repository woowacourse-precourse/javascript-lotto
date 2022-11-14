const Lotto = require("./Lotto");
const { Random } = require("@woowacourse/mission-utils");
const LOTTERY_PRICE = 1000;
const LOTTERY_MIN_NUMBER = 1;
const LOTTERY_MAX_NUMBER = 45;
const PRIZE_CRITERIA = Object.freeze({
  FIRST: 6,
  SECOND_THIRD: 5,
  FOURTH: 4,
  FIFTH: 3,
});
const PRIZE_MONEY = Object.freeze({
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
});

class LottoGame {
  constructor(LottoGameView) {
    this.view = LottoGameView;
    this.lotteries = [];
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
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    }

    if ((purchaseAmount < LOTTERY_PRICE)) {
      throw new Error(`[ERROR] 최소 입력 금액은 ${LOTTERY_PRICE}원입니다.`);
    }

    if (!Number.isInteger(purchaseAmount) || purchaseAmount % LOTTERY_PRICE) {
      throw new Error("[ERROR] 1,000원 단위로 입력해주세요.")
    }
  }
  
  issueLottories() {
    this.setLottoQuantity();
    while (this.lotteries.length < this.lottoQuantity) {
      const lotto = this.getNewLotto();
      this.lotteries.push(lotto);
    }

    this.view.printPurchasedLotteries(this.lottoQuantity, this.lotteries);
  }

  setLottoQuantity() {
    this.lottoQuantity = this.purchaseAmount / LOTTERY_PRICE;
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
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }

    if (!Number.isInteger(Number(bonus))) {
      throw new Error("[ERROR] 정수를 입력해주세요.")
    }

    if (Number(bonus) < LOTTERY_MIN_NUMBER || Number(bonus) > LOTTERY_MAX_NUMBER) {
      throw new Error(`[ERROR] 보너스 번호는 ${LOTTERY_MIN_NUMBER}~${LOTTERY_MAX_NUMBER}까지의 숫자여야 합니다.`);
    }

    this.checkDuplicationBonusNumber(Number(bonus));
  }

  checkDuplicationBonusNumber(bonus) {
    const winningNumber = this.winningLotto.getNumber();
    if (winningNumber.includes(bonus)) {
      throw new Error("[ERROR] 당첨 번호와 중복되지 않는 번호를 입력해주세요.")
    }
  }

  compareWinningLotto() {
    const winningNumber = this.winningLotto.getNumber();
    this.lotteries.forEach((lotto) => {
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
      totalRevenue += this.prizeCount[prize]*PRIZE_MONEY[prize.toUpperCase()];
    });

    return totalRevenue;
  }
}

module.exports = LottoGame;
