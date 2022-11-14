const { LOTTO, SYSTEM } = require('./consts/Lotto');
const MESSAGE = require('./consts/Message');

const Console = require('./Console');
const Exception = require('./Exception');
const Random = require('./Random');
const Lotto = require('./Lotto');

class App {
  purchase;
  numberOfPurchases;
  purchaseLottos;
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
    let purchaseLottos = [];

    for (let i = 0; i < this.numberOfPurchases; i++) {
      const numbers = this.getLottoNumbers();
      purchaseLottos.push(new Lotto(numbers));
    }

    this.purchaseLottos = purchaseLottos;
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

    for (const lotto of this.purchaseLottos) {
      Console.print(this.getBracketsString(lotto.getNumbers()));
    }
  }

  getBracketsString(numbers) {
    const joinString = numbers.join(`${SYSTEM.JOIN_CHARACTER} `);

    return `[${joinString}]`;
  }

  setWinningLotto() {
    const winningNumbers = this.inputWinningNumbers();
    const bonusNumber = this.inputBonusNumber();

    this.winningLotto = new WinningLotto(
      new Lotto(winningNumbers),
      bonusNumber
    );
  }

  inputWinningNumbers() {
    let winningNumbers;
    Console.readLine(MESSAGE.INPUT.WINNING, (input) => {
      winningNumbers = this.parseNumbers(input);
      Console.close();
    });

    return winningNumbers;
  }

  parseNumbers(input) {
    return input.split(SYSTEM.JOIN_CHARACTER).map(Number);
  }

  inputBonusNumber() {
    let bonusNumber;
    Console.readLine(MESSAGE.INPUT.BONUS, (input) => {
      const inputNumber = Number(input);
      bonusNumber = inputNumber;
      Console.close();
    });

    return bonusNumber;
  }
}

module.exports = App;
