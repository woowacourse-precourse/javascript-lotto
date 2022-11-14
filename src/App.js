const Console = require('./Console');
const Exception = require('./Exception');
const Random = require('./Random');
const Lotto = require('./Lotto');
const LOTTO = require('./consts/Lotto');
const MESSAGE = require('./consts/Message');

class App {
  purchase;
  numberOfPurchases;
  lottos;

  play() {
    this.setPurchase();
    this.setNumberOfPurchases();
    this.setLottos();
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

  setNumberOfPurchases() {
    this.numberOfPurchases = this.calculateNumberOfPurchases();
  }

  calculateNumberOfPurchases() {
    return this.purchase / LOTTO.PRICE;
  }

  setLottos() {
    let lottos = [];

    for (const i = 0; i < this.numberOfPurchases; i++) {
      const numbers = this.getLottoNumbers();
      lottos.push(new Lotto(numbers));
    }

    this.lottos = lottos;
  }

  getLottoNumbers() {
    const lotto = Random.pickUniqueNumbersInRange(
      LOTTO.START_NUMBER,
      LOTTO.END_NUMBER,
      LOTTO.NUMBER_OF_DIGITS
    );

    return lotto;
  }
}

module.exports = App;
