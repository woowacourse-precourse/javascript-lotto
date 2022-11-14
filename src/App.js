const { LOTTO, SYSTEM } = require('./consts/LottoSystem');
const MESSAGE = require('./consts/Message');

const Console = require('./Console');
const Exception = require('./Exception');
const Random = require('./Random');
const Lotto = require('./Lotto');
const WinningLotto = require('./WinningLotto');
const Calculate = require('./Calculate');
const Statistics = require('./Statistics');
const Purchase = require('./Purchase');

class App {
  purchase;
  purchaseLottos;
  winningLotto;
  calculates;
  statistics;

  play() {
    this.setPurchase();
    this.setLottos();
    this.printPurchaseResult();
    this.setWinningLotto();
    this.setCalculates();
    this.setStatistics();
    this.statistics.print();
  }

  setPurchase() {
    this.purchase = new Purchase();
  }

  setLottos() {
    let purchaseLottos = [];

    for (let i = 0; i < this.purchase.getNumberOfPurchases(); i++) {
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
    Console.print(
      MESSAGE.NOTICE.PURCHASE_SUCCESS(this.purchase.getNumberOfPurchases())
    );

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
      this.handleWinningNumbersException(winningNumbers);
      Console.close();
    });

    return winningNumbers;
  }

  parseNumbers(input) {
    return input.split(SYSTEM.JOIN_CHARACTER).map(Number);
  }

  handleWinningNumbersException(winningNumbers) {
    const {
      ERROR: {
        WINNING: { FORM },
      },
    } = MESSAGE;

    if (!this.isCorrectForm(winningNumbers)) {
      throw Exception.error(FORM);
    }
  }

  isCorrectForm(winningNumbers) {
    if (winningNumbers.length === LOTTO.NUMBER_OF_DIGITS) {
      return true;
    }

    return false;
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

  setCalculates() {
    let calculates = [];
    for (const purchaseLotto of this.purchaseLottos) {
      calculates.push(new Calculate(purchaseLotto, this.winningLotto));
    }

    this.calculates = calculates;
  }

  setStatistics() {
    this.statistics = new Statistics(
      this.calculates,
      this.purchase.getPurchase()
    );
  }
}

module.exports = App;
