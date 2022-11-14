const { Console, Random } = require('@woowacourse/mission-utils');
const messages = require('./constants/constants.js');
class App {
  play() {
    this.getPurchaseAmount();
  }
  getPurchaseAmount() {
    Console.readLine(messages.GUIDE.ENTER_LOTTO_PURCHASE_AMOUNT, (purchaseAmountInput) => {
      if (this.isValidPurchaseAmount(purchaseAmountInput))
        this.purchaseAmount = Number(purchaseAmountInput);
    });
  }

  isValidPurchaseAmount(purchaseAmountInput) {
    return (
      this.isAllDigits(purchaseAmountInput) &&
      this.isFirstDigitNotZero(purchaseAmountInput) &&
      this.isDivisibleByThousand(purchaseAmountInput)
    );
  }

  isAllDigits(purchaseAmountInput) {
    const possibleNumbers = Random.pickUniqueNumbersInRange(0, 9, 10).map((number) =>
      String(number)
    );
    if (purchaseAmountInput.split('').every((digit) => possibleNumbers.includes(digit)))
      return true;
    throw new Error(messages.ERROR.INCLUDE_NOT_NUMBER_ERROR);
  }

  isFirstDigitNotZero(purchaseAmountInput) {
    if (purchaseAmountInput[0] !== '0') return true;
    throw new Error(messages.ERROR.START_WITH_ZERO_ERROR);
  }

  isDivisibleByThousand(purchaseAmountInput) {
    if (Number(purchaseAmountInput) % 1000 === 0) return true;
    throw new Error(messages.ERROR.NOT_DIVISIBLE_BY_THOUSAND_ERROR);
  }
}

const app = new App();
app.play();

module.exports = App;
