const User = require('./User');
const { Console, Random } = require('@woowacourse/mission-utils');
const MESSAGE = require('./MESSAGE');

class App {
  #winNumber;
  #bonusNumber;

  play() {
    this.user = new User();
    this.getMoney();
  }

  getMoney() {
    Console.readLine(MESSAGE.INPUT.MONEY, (money) => {
      this.user.buyLottos(Number(money));
      this.drawLotto();
    });
  }

  drawLotto() {
    Console.readLine(MESSAGE.INPUT.WINNUMBER, (numbers) => {
      let WINNUMBER = numbers.split(',').map((v) => Number(v));
      this.validate(WINNUMBER);
      this.#winNumber = WINNUMBER;
      this.drawBonus();
    });
  }

  drawBonus() {
    Console.readLine(MESSAGE.INPUT.BONUSNUMBER, (number) => {
      let BONUSNUMBER = number.split(',').map((v) => Number(v));
      this.validateBonus(BONUSNUMBER);
      this.#bonusNumber = BONUSNUMBER[0];
    });
  }

  validateBonus(number) {
    if (!this.isLengthOne(number))
      throw new Error(MESSAGE.ERROR.LOTTO.BONUSLENGTH);
    if (!this.isNumber(number)) throw new Error(MESSAGE.ERROR.LOTTO.NUMBER);
    if (!this.isValidRange(number)) throw new Error(MESSAGE.ERROR.LOTTO.RANGE);
    if (!this.isUniqueBonus(number))
      throw new Error(MESSAGE.ERROR.LOTTO.DUPLICATE);
  }

  validate(numbers) {
    if (!this.isLengthSix(numbers)) throw new Error(MESSAGE.ERROR.LOTTO.LENGTH);
    if (!this.isNumber(numbers)) throw new Error(MESSAGE.ERROR.LOTTO.NUMBER);
    if (!this.isValidRange(numbers)) throw new Error(MESSAGE.ERROR.LOTTO.RANGE);
    if (!this.isUnique(numbers)) throw new Error(MESSAGE.ERROR.LOTTO.DUPLICATE);
  }

  isLengthSix(numbers) {
    return numbers.length === 6;
  }
  isLengthOne(number) {
    return number.length === 1;
  }

  isNumber(numbers) {
    let numberStyle = /^[0-9]+$/;
    let isNumberMethod = (num) => numberStyle.test(num);
    return numbers.every(isNumberMethod);
  }

  isUniqueBonus(number) {
    return !this.#winNumber.includes(number[0]);
  }

  isUnique(numbers) {
    let isUniqueMethod = (num) =>
      numbers.indexOf(num) !== numbers.lastIndexOf(num);
    return !numbers.some(isUniqueMethod);
  }

  isValidRange(numbers) {
    let isValidRangeMethod = (num) => num >= 1 && num <= 45;
    return numbers.every(isValidRangeMethod);
  }
}

const app = new App();
app.play();

module.exports = App;
