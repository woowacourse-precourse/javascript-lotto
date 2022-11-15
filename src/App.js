const { Console } = require('@woowacourse/mission-utils');

const User = require('./User');
const Lotto = require('./Lotto');
const Drawing = require('./Drawing');
const { MESSAGE } = require('../src/utils/constants');
const { parseNumbers } = require('./utils/utils');
const { validateAmount, validateWinningNumbers, validateBonusNumber } = require('./utils/validateInput');

class App {
  constructor() {
    this.drawing = new Drawing();
  }

  play() {
    this.getPurchaseAmount(this.setLottoBuyer.bind(this));
  }

  getPurchaseAmount(callback) {
    Console.readLine(MESSAGE.ENTER_PURCHASE_AMOUNT, callback);
  }

  setLottoBuyer(amount) {
    const trimmedAmount = amount.trim();
    validateAmount(amount);

    this.drawing.user = new User(trimmedAmount);
    this.printBoughtLottos(this.drawing.user.buyLotto());

    this.getWinningNumbers(this.setLottoWinningNumbers.bind(this));
  }

  printBoughtLottos({ quantity, lottos }) {
    Console.print('');
    Console.print(MESSAGE.QUANTITY_OF_PURCHASE(quantity));
    lottos.forEach(lotto => Console.print(lotto.toString()));
  }

  getWinningNumbers(callback) {
    Console.print('');
    Console.readLine(MESSAGE.ENTER_WINNING_NUMBERS, callback);
  }

  setLottoWinningNumbers(numbers) {
    const trimmedNumbers = numbers.trim();
    validateWinningNumbers(trimmedNumbers);

    this.drawing.winningNumbers = new Lotto(parseNumbers(trimmedNumbers)).numbers;

    this.getBonusNumber(this.setLottoBonusNumber.bind(this));
  }

  getBonusNumber(callback) {
    Console.print('');
    Console.readLine(MESSAGE.ENTER_BONUS_NUMBER, callback);
  }

  setLottoBonusNumber(number) {
    const trimmedNumber = number.trim();
    validateBonusNumber(this.drawing.winningNumbers, trimmedNumber);

    this.drawing.bonusNumber = Number(trimmedNumber);
    this.printStatistics();
  }

  printStatistics() {
    const statistics = this.drawing.draw();

    Console.print(statistics);
    Console.close();
  }
}

new App().play();
module.exports = App;
