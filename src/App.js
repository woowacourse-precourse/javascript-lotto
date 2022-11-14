const Console = require('./Console');
const Exception = require('./Exception');
const LOTTO = require('./consts/Lotto');

class App {
  purchase;
  numberOfPurchases;

  play() {
    this.setPurchase();
    this.setNumberOfPurchases();
  }

  setPurchase() {
    Console.readLine(Console.INPUT.PURCHASE, (input) => {
      const inputNumber = Number(input);

      this.handlePurchaseException(inputNumber);
      this.purchase = inputNumber;

      Console.close();
    });
  }

  handlePurchaseException(inputNumber) {
    switch (false) {
      case this.isInteger(inputNumber):
        throw new Error(Exception.error(Exception.INTEGER));
      case this.isInUnit(inputNumber):
        throw new Error(Exception.error(Exception.UNIT));
    }
  }

  isInteger(inputNumber) {
    return Number.isInteger(inputNumber);
  }

  isInUnit(inputNumber) {
    if (inputNumber % LOTTO.PRICE === 0) {
      return true;
    }

    return false;
  }

  setNumberOfPurchases() {
    this.numberOfPurchases = this.calculatenumberOfPurchases();
  }

  calculateNumberOfPurchases() {
    return this.purchase / LOTTO.PRICE;
  }
}

module.exports = App;
