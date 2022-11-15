const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, RANK, PRIZE, CONDITION } = require('./utils/constant');
const LottoShop = require('./LottoShop');
const Lotto = require('./Lotto');
const Bonus = require('./Bonus');
const Output = require('./Output');

class LottoGame {
  constructor() {
    this.purchaseAmount;
    this.purchasedNumbers;
    this.winningNumbers;
    this.bonusNumber;
  }

  inputPurchaseAmount() {
    Console.readLine(MESSAGE.INPUT_PURCHASE_AMOUNT, (amount) => {
      const lottoShop = new LottoShop(Number(amount));
      lottoShop.buyLotto(Number(amount));
      this.purchaseAmount = Number(amount);
      this.purchasedNumbers = lottoShop.getPurchasedNumbers();
      this.inputWinningNumber();
    });
  }

  inputWinningNumber() {
    Console.readLine(MESSAGE.INPUT_LOTTO_NUMBER, (lottoNumbers) => {
      const lotto = new Lotto(
        lottoNumbers.split(',').map((number) => Number(number))
      );
      this.winningNumbers = lotto.getWinningNumbers();
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine(MESSAGE.INPUT_BONUS_NUMBER, (bonusNumber) => {
      const bonus = new Bonus(Number(bonusNumber), this.winningNumbers);
      this.bonusNumber = bonus.getBonusNumber();
      this.drawLotto();
    });
  }

  countCorrectNumbers(purchasedNumber) {
    let correctNumbers = 0;

    purchasedNumber.forEach((number) => {
      if (this.winningNumbers.includes(number)) correctNumbers += 1;
    });

    return correctNumbers;
  }

  isCorrectBonus() {
    return this.winningNumbers.includes(this.bonusNumber);
  }

  getLottoRank(correctNumbers) {
    switch (correctNumbers) {
      case 3:
        return RANK.FIFTH;
      case 4:
        return RANK.FOURTH;
      case 5:
        return this.isCorrectBonus() ? RANK.SECOND : RANK.THIRD;
      case 6:
        return RANK.FIRST;
      default:
        return RANK.SIXTH;
    }
  }

  calcTotalPrize(totalRank) {
    let totalPrize = 0;

    for (let rank = RANK.FIRST; rank <= RANK.FIFTH; rank++) {
      totalPrize += totalRank[rank] * PRIZE[rank];
    }

    return totalPrize;
  }

  calcRateOfReturn(totalPrize) {
    return ((totalPrize / this.purchaseAmount) * CONDITION.PERCENTAGE).toFixed(
      1
    );
  }

  drawLotto() {
    const totalRank = new Array(7).fill(0);

    this.purchasedNumbers.forEach((purchasedNumber) => {
      const correctNumbers = this.countCorrectNumbers(purchasedNumber);
      const lottoRank = this.getLottoRank(correctNumbers);
      totalRank[lottoRank] += 1;
    });

    const totalPrize = this.calcTotalPrize(totalRank);
    const rateOfReturn = this.calcRateOfReturn(totalPrize);
    new Output().drawResult(totalRank, rateOfReturn);
  }
}

module.exports = LottoGame;
