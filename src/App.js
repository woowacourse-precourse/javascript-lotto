const Console = require('./Console');
const Exception = require('./Exception');
const LOTTO = require('./consts/Lotto');
const MESSAGE = require('./consts/Message');

class App {
  purchase;
  numberOfPurchases;

  play() {
    this.setPurchase();
    this.setNumberOfPurchases();
  }

  setPurchase() {
    Console.readLine(MESSAGE.INPUT.PURCHASE, (input) => {
      const inputNumber = Number(input);

      this.handlePurchaseException(inputNumber);
      this.purchase = inputNumber;

      Console.close();
    });
  }

  handlePurchaseException(inputNumber) {
    const {
      ERROR: { INTEGER, UNIT },
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
}

module.exports = App;
