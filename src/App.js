const { Console, Random } = require('@woowacourse/mission-utils');
const { GUIDE } = require('./constants/constants.js');
const {
  isValidPurchaseAmount,
  isValidWinningNumbers,
  isValidBonusNumber,
} = require('./validation.js');
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
    if (isValidPurchaseAmount(input)) this.purchaseAmount = Number(input);
  }

  buyLottos() {
    this.numberOfGeneratedLottos = this.calculateNumberOfGeneratedLottos();
    this.generateLottos();
  }

  generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
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
      if (isValidWinningNumbers(input)) {
        this.winningNumbers = input.split(',').map((el) => +el);
        Console.print('');
        this.getBonusNumber();
      }
    });
  }

  getBonusNumber() {
    Console.readLine(GUIDE.ENTER_BONUS_NUMBER, (input) => {
      if (isValidBonusNumber(input, this.winningNumbers)) {
        this.bonusNumber = Number(input);
        Console.print('');
        this.printGameResult();
      }
    });
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
