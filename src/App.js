const { Console } = require('@woowacourse/mission-utils');
const Bonus = require('./Bonus');
const { REGEXP, MESSAGE, ERROR_MESSAGE } = require('./constant/constant');
const Lotto = require('./Lotto');
const Lottos = require('./Lottos');

class App {
  constructor() {
    this.lottos = null;
    this.lotto = null;
    this.bonus = null;
  }

  play() {
    this.inputPurchasingPrice();
  }

  inputPurchasingPrice() {
    Console.readLine(MESSAGE.INPUT_PURCHASING_PRICE, (price) => {
      this.validate(price);
      this.lottos = new Lottos(parseInt(price, 10) / 1000);
      this.lottos.showLottosAmount();
      this.lottos.showLottosNumber();

      this.inputWinningNumbers();
    });
  }

  validate(price) {
    if (!REGEXP.CHECK_NUMBER.test(price)) {
      throw new Error(ERROR_MESSAGE.ONLY_INPUT_NUMBER);
    }

    if (REGEXP.CHECK_START_NUMBER.test(price)) {
      throw new Error(ERROR_MESSAGE.START_NUMBER_ZERO);
    }

    if (parseInt(price, 10) < 1000) {
      throw new Error(ERROR_MESSAGE.MIN_PRICE);
    }

    if (parseInt(price, 10) % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.INVALID_UNIT);
    }
  }

  inputWinningNumbers() {
    Console.readLine(MESSAGE.INPUT_WINNING_NUMBERS, (numbers) => {
      const winningNumbers = numbers.split(',').sort((num1, num2) => num1 - num2);
      this.lotto = new Lotto(winningNumbers);

      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine(MESSAGE.INPUT_BONUS_NUMBER, (number) => {
      this.bonus = new Bonus(number, this.lotto.getNumbers());

      this.compareTotal(
        this.lottos.values,
        this.lotto.getNumbers(),
        this.bonus.getNumber()
      );
    });
  }

  compareTotal(lottoNumbersZip, winningNumbers, bonusNumber) {
    const winningResult = new Array(5).fill(0);

    for (let index = 0; index < lottoNumbersZip.length; index += 1) {
      const result = this.compare(lottoNumbersZip[index], winningNumbers, bonusNumber);

      if (result <= 5) {
        winningResult[result - 1] += 1;
      }
    }
  }

  compare(lottoNumbers, winningNumbers, bonusNumber) {
    if (lottoNumbers.join() === winningNumbers.join()) {
      return 1;
    }

    let rank =
      8 - lottoNumbers.filter((number) => winningNumbers.includes(number)).length;

    if (rank === 3 && lottoNumbers.includes(bonusNumber)) {
      rank -= 1;
    }

    return rank;
  }
}

const app = new App();
app.play();

module.exports = App;
