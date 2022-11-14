const { Console, Random } = require('@woowacourse/mission-utils');
const { GUIDE, ERROR } = require('./constants/constants.js');
class App {
  constructor() {
    this.purchaseAmount = 0;
    this.numberOfGeneratedLottos = 0;
    this.generatedLottos = [];
  }
  play() {
    this.playLottoGame();
  }

  playLottoGame() {
    Console.readLine(GUIDE.ENTER_LOTTO_PURCHASE_AMOUNT, (input) => {
      this.getPurchaseAmount(input);
      this.buyLottos();
      this.printNumberofLottos();
      this.printLottoNumbers();
    });
  }
  getPurchaseAmount(input) {
    if (this.isValidPurchaseAmount(input)) this.purchaseAmount = Number(input);
  }

  buyLottos() {
    this.numberOfGeneratedLottos = this.calculateNumberOfGeneratedLottos();
    this.generateLottos();
    // Console.print(this.generatedLottos);
  }

  generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
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
    throw new Error(ERROR.INCLUDE_NOT_NUMBER_ERROR);
  }

  isFirstDigitNotZero(purchaseAmountInput) {
    if (purchaseAmountInput[0] !== '0') return true;
    throw new Error(ERROR.START_WITH_ZERO_ERROR);
  }

  isDivisibleByThousand(purchaseAmountInput) {
    if (Number(purchaseAmountInput) % 1000 === 0) return true;
    throw new Error(ERROR.NOT_DIVISIBLE_BY_THOUSAND_ERROR);
  }

  calculateNumberOfGeneratedLottos() {
    return this.purchaseAmount / 1000;
  }

  generateLottos() {
    for (let i = 0; i < this.numberOfGeneratedLottos; i++) {
      this.generatedLottos.push(this.generateLottoNumbers());
    }
  }

  printNumberofLottos() {
    Console.print(`${this.numberOfGeneratedLottos}${GUIDE.SHOW_NUMBER_OF_LOTTOS}`);
  }

  printLottoNumbers() {
    this.generatedLottos.forEach((generatedLotto) =>
      Console.print(`[${generatedLotto.join(', ')}]`)
    );
    Console.print('');
  }
}

const app = new App();
app.play();

module.exports = App;
