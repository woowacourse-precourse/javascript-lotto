const { Console, Random } = require('@woowacourse/mission-utils');
const { GUIDE, ERROR } = require('./constants/constants.js');
class App {
  constructor() {
    this.purchaseAmount = 0;
    this.numberOfGeneratedLottos = 0;
    this.generatedLottos = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
  }

  play() {
    this.playLottoGame();
  }

  playLottoGame() {
    Console.readLine(GUIDE.ENTER_LOTTO_PURCHASE_AMOUNT, (input) => {
      this.getPurchaseAmount(input);
      Console.print('');
      this.buyLottos();
      this.printNumberofLottos();
      this.printLottoNumbers();
      this.getWinningNumbers();
      this.getBonusNumber();
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
      this.isAllDigit(purchaseAmountInput, 'purchaseAmount') &&
      this.isFirstDigitNotZero(purchaseAmountInput) &&
      this.isDivisibleByThousand(purchaseAmountInput)
    );
  }

  isAllDigit(input, type) {
    const possibleNumbers = Random.pickUniqueNumbersInRange(0, 9, 10).map((number) =>
      String(number)
    );
    if (input.split('').every((digit) => possibleNumbers.includes(digit))) return true;
    if (type === 'purchaseAmount')
      throw new Error(ERROR.INCLUDE_NOT_NUMBER_IN_PURCHASE_AMOUNT_ERROR);
    if (type === 'winningNumber')
      throw new Error(ERROR.INCLUDE_NOT_NUMBER_IN_WINNING_NUMBERS_ERROR);
    if (type === 'bonusNumber') throw new Error(ERROR.INCLUDE_NOT_NUMBER_IN_BONUS_NUMBER_ERROR);
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

  getWinningNumbers() {
    Console.readLine(GUIDE.ENTER_WINNING_NUMBERS, (input) => {
      if (this.isValidWinningNumbers(input)) {
        this.winningNumbers = input.split(',').map((el) => +el);
        Console.print('');
        this.getBonusNumber();
      }
    });
  }

  isValidWinningNumbers(input) {
    return (
      this.isWinningNumbersAllDigit(input) &&
      this.isSixNumbers(input) &&
      this.isAllNumberInRange(input) &&
      this.isNotDuplicated(input)
    );
  }

  isWinningNumbersAllDigit(input) {
    if (input.split(',').every((el) => this.isAllDigit(el, 'winningNumber'))) return true;
  }

  isSixNumbers(input) {
    if (input.split(',').length === 6) return true;
    throw new Error(ERROR.NOT_SIX_WINNING_NUMBERS_ERROR);
  }

  isNumberInRange(input) {
    const possibleWinngNumbers = Random.pickUniqueNumbersInRange(1, 45, 45);
    return possibleWinngNumbers.includes(input);
  }

  isAllNumberInRange(input) {
    if (
      input
        .split(',')
        .map((el) => Number(el))
        .every((number) => this.isNumberInRange(number))
    )
      return true;
    throw new Error(ERROR.WINNING_NUMBER_OUT_OF_RANGE_ERROR);
  }
  isNotDuplicated(input) {
    const numbersArr = input.split(',').map((el) => Number(el));
    const numbersSet = new Set(numbersArr);
    if (numbersArr.length === numbersSet.size) return true;
    throw new Error(ERROR.WINNING_NUMBERS_DUPLICATED);
  }

  getBonusNumber() {
    Console.readLine(GUIDE.ENTER_BONUS_NUMBER, (input) => {
      if (this.isValidBonusNumber(input)) {
        this.bonusNumber = Number(input);
        Console.print('');
        this.printGameResult();
      }
    });
  }

  isValidBonusNumber(input) {
    return (
      this.isAllDigit(input) &&
      this.isBonusNumberInRange(input) &&
      this.isNotDuplicatedWithWinningNumbers(input)
    );
  }

  isBonusNumberInRange(input) {
    if (this.isNumberInRange(Number(input))) return true;
    throw new Error(ERROR.BONUS_NUMBER_OUT_OF_RANGE_ERROR);
  }

  isNotDuplicatedWithWinningNumbers(input) {
    if (!this.winningNumbers.includes(Number(input))) return true;
    throw new Error(ERROR.BONUS_NUMBER_DUPLICATED_WITH_WINNING_NUMBERS);
  }

  compareGeneratedLottoWithWinngNumbers(generatedLotto) {
    let numberOfMatchingWithWinngNumbers = 0;
    generatedLotto.forEach((number) => {
      if (this.winningNumbers.includes(number)) numberOfMatchingWithWinngNumbers += 1;
    });
    return numberOfMatchingWithWinngNumbers;
  }

  isMatchWithBonusNumber(generatedLotto) {
    return generatedLotto.includes(this.bonusNumber);
  }

  calculateResult() {
    const numbersOfMatching = [0, 0, 0, 0, 0];
    this.generatedLottos.forEach((generatedLotto) => {
      let numberOfMatchingWithWinngNumbers =
        this.compareGeneratedLottoWithWinngNumbers(generatedLotto);
      if (numberOfMatchingWithWinngNumbers < 3) return;
      if (numberOfMatchingWithWinngNumbers < 6 && !this.isMatchWithBonusNumber(generatedLotto))
        numbersOfMatching[numberOfMatchingWithWinngNumbers - 3] += 1;
      if (numberOfMatchingWithWinngNumbers === 5 && this.isMatchWithBonusNumber(generatedLotto))
        numbersOfMatching[3] += 1;
      if (numberOfMatchingWithWinngNumbers === 6) numbersOfMatching[4] += 1;
    });
    return numbersOfMatching;
  }

  getResultSixNumbersMatching(winningAmount, number) {
    return `6개 일치 (${winningAmount.toLocaleString()}원) - ${number}개\n`;
  }

  getResultThreetoFiveNumbersMatching(numberOfMatching, winningAmount, number) {
    return `${numberOfMatching}개 일치 (${winningAmount.toLocaleString()}원) - ${number}개\n`;
  }

  getResultFiveNumbersWithBonusNumberMatching(winningAmount, number) {
    return `5개 일치, 보너스 볼 일치 (${winningAmount.toLocaleString()}원) - ${number.toLocaleString()}개\n`;
  }

  getMatchiingResult(winningAmounts, numbersOfMatching) {
    let matchingResult = '';
    numbersOfMatching.forEach((number, idx) => {
      let amount = winningAmounts[idx];
      if (idx !== 3 && idx !== 4) {
        matchingResult += this.getResultThreetoFiveNumbersMatching(idx + 3, amount, number);
      }
      if (idx === 3)
        matchingResult += this.getResultFiveNumbersWithBonusNumberMatching(amount, number);
      if (idx === 4) {
        matchingResult += this.getResultSixNumbersMatching(amount, number);
      }
    });
    return matchingResult;
  }

  getRateOfReturn(winningAmounts, numbersOfMatching) {
    let totalWinningAmount = 0;
    winningAmounts.forEach(
      (_, idx) => (totalWinningAmount += winningAmounts[idx] * numbersOfMatching[idx])
    );
    return Number.parseFloat((totalWinningAmount / this.purchaseAmount) * 100).toFixed(2);
  }

  printGameResult() {
    const winningAmounts = [5000, 50000, 1500000, 30000000, 2000000000];
    const numbersOfMatching = this.calculateResult();
    let result = '';
    Console.print(GUIDE.SHOW_GAME_RESULT);
    result += this.getMatchiingResult(winningAmounts, numbersOfMatching);
    result += `총 수익률은 ${this.getRateOfReturn(winningAmounts, numbersOfMatching)}%입니다.`;
    Console.print(result);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
