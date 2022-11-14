const Console = require('./Console');
const Exception = require('./Exception');
const MESSAGE = require('./consts/Message');
const { LOTTO } = require('./consts/LottoSystem');

class Purchase {
  purchase;
  numberOfPurchases;

  constructor() {
    this.purchase = this.inputPurchase();
    this.numberOfPurchases = this.calcNumberOfPurchases();
  }

  getPurchase() {
    return this.purchase;
  }

  getNumberOfPurchases() {
    return this.numberOfPurchases;
  }

  inputPurchase() {
    let purchase;

    Console.readLine(MESSAGE.INPUT.PURCHASE, (input) => {
      const inputNumber = Number(input);

      this.handlePurchaseException(inputNumber);
      purchase = inputNumber;

      Console.close();
    });

    return purchase;
  }

  handlePurchaseException(inputNumber) {
    const {
      ERROR: {
        PURCHASE: { INTEGER, UNIT },
      },
    } = MESSAGE;

    switch (false) {
      case this.isInteger(inputNumber):
        throw Exception.error(INTEGER);
      case this.isInUnit(inputNumber):
        throw Exception.error(UNIT);
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
    this.numberOfPurchases = this.calcNumberOfPurchases();
  }

  calcNumberOfPurchases() {
    return this.purchase / LOTTO.PRICE;
  }
}

module.exports = Purchase;
