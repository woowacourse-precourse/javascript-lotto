const LOTTO = require('./consts/Lotto');
const MESSAGE = require('./consts/Message');

const Console = require('./Console');
const Exception = require('./Exception');
const Random = require('./Random');
const Lotto = require('./Lotto');

class App {
  purchase;
  numberOfPurchases;
  lottos;
  winningLotto;

  play() {
    this.setPurchase();
    this.setNumberOfPurchases();
    this.setLottos();
    this.printPurchaseResult();
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
    this.numberOfPurchases = this.calculateNumberOfPurchases();
  }

  calculateNumberOfPurchases() {
    return this.purchase / LOTTO.PRICE;
  }

  setLottos() {
    let lottos = [];

    for (let i = 0; i < this.numberOfPurchases; i++) {
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

  printPurchaseResult() {
    Console.print(MESSAGE.NOTICE.PURCHASE_SUCCESS(this.numberOfPurchases));

    for (const lotto of this.lottos) {
      Console.print(this.getBracketsString(lotto.getNumbers()));
    }
  }

  getBracketsString(numbers) {
    const joinString = numbers.join(', ');

    return `[${joinString}]`;
  }
}

module.exports = App;
