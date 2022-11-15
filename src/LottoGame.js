const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, RANK } = require('./utils/constant');
const LottoShop = require('./LottoShop');
const Lotto = require('./Lotto');
const Bonus = require('./Bonus');

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
}
module.exports = LottoGame;
