const { readLine, print } = require('./utils/ui');
const { INPUT_MESSAGE, PRINT_MESSAGE } = require('./constants');
const random = require('./utils/random');
const validation = require('./validation');
const Lotto = require('./Lotto');

class App {
  constructor() {
    this.userLottoCount = 0;
    this.userLottoBundle = [];
    this.winningNumber = [];
    this.bonusNumber = 0;
  }

  play() {
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount() {
    readLine(INPUT_MESSAGE.PURCHASE_AMOUNT, (purchaseAmount) => {
      validation.isUnitOf1000(purchaseAmount);
      this.userLottoCount = purchaseAmount / 1000;
      this.generateUserLotto(this.userLottoCount);
      this.printUserLottoBundle();
      this.inputWinningNumber();
    });
  }

  generateUserLotto(lottoCount) {
    for (let count = 0; count < lottoCount; count += 1) {
      const generatedLotto = random.pickUniqueNumbersInRange(1, 45, 6);
      this.userLottoBundle.push(generatedLotto);
    }
  }

  printUserLottoBundle() {
    print(`\n${this.userLottoCount + PRINT_MESSAGE.LOTTO_COUNT}`);
    this.userLottoBundle.forEach((lotto) => {
      const sortedLotto = lotto.sort((prev, next) => prev - next).join(', ');
      print(`[${sortedLotto}]`);
    });
  }

  inputWinningNumber() {
    readLine(INPUT_MESSAGE.WINNING_NUMBER, (numbers) => {
      this.winningNumber = new Lotto(numbers).getLottoNumbers();
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    readLine(INPUT_MESSAGE.BONUS_NUMBER, (bonusNumber) => {
      validation.isBonusNumber(bonusNumber, this.winningNumber);
      this.bonusNumber = parseInt(bonusNumber, 10);
      this.printUserWinningStatistics();
    });
  }

  printUserWinningStatistics() {
    print(PRINT_MESSAGE.WINNING_STATISTICS_TITLE);
    const userWinningStatistics = this.calculateUserWinningStatistics();
  }

  calculateUserWinningNumberCount(lottoNumbers) {
    const userWinningNumberCount = lottoNumbers.filter((number) =>
      this.winningNumber.includes(number)
    ).length;
    if (
      userWinningNumberCount === 5 &&
      lottoNumbers.includes(this.bonusNumber)
    ) {
      return 'bonus';
    }
    return userWinningNumberCount;
  }

  calculateUserWinningStatistics() {
    const userWinningStatistics = [0, 0, 0, 0, 0];
    this.userLottoBundle.forEach((userLotto) => {
      const userWinningNumberCount =
        this.calculateUserWinningNumberCount(userLotto);
      if (userWinningNumberCount === 'bonus') userWinningStatistics[3] += 1;
      if (userWinningNumberCount === 6) {
        userWinningStatistics[4] += 1;
        return;
      }
      if (userWinningNumberCount >= 3)
        userWinningStatistics[userWinningNumberCount - 3] += 1;
    });
    return userWinningStatistics;
  }
}

const app = new App();
app.play();

module.exports = App;
