const { Console, Random } = require('@woowacourse/mission-utils');
const {
  QUESTION_MESSAGE,
  ERROR_MESSAGE,
  BUY_MESSAGE,
} = require('./libs/const');
const Lotto = require('./Lotto');

class App {
  #totalLotto = [];
  #userPrizeNumber;
  #userBonusNumber;

  play() {
    // this.start();
    this.setPrizeNumber();
  }

  start() {
    Console.readLine(QUESTION_MESSAGE.buy, money => {
      if (money % 1000 !== 0) throw new Error(ERROR_MESSAGE.purchase);
      this.purchase(money);
    });
  }

  purchase(money) {
    const count = money / 1000;
    Console.print(`${count}${BUY_MESSAGE}`);
    for (let i = 0; i < count; i += 1) {
      const lottoArray = this.setLotto();
      const stringArray = this.convertFromArrayToString(lottoArray);
      Console.print(stringArray);
      this.#totalLotto.push(lottoArray);
    }
  }

  convertFromArrayToString(array) {
    const lastIndex = array.length - 1;
    const initialValue = '';
    const arrStr = array.reduce((previousValue, currentValue, index) => {
      if (index !== lastIndex) return `${previousValue}${currentValue}, `;
      return `${previousValue}${currentValue}`;
    }, initialValue);
    const string = `[${arrStr}]`;
    return string;
  }

  setLotto() {
    const randomArr = Random.pickUniqueNumbersInRange(1, 45, 6);
    const lottoArr = randomArr.sort((a, b) => a - b);
    return lottoArr;
  }

  setPrizeNumber() {
    Console.readLine(QUESTION_MESSAGE.prize, numbers => {
      if (numbers.includes(',') === false) throw new Error(ERROR_MESSAGE.comma);
      const prizeNumberArray = numbers.split(',').map(item => item.trim());
      const set = new Set();
      prizeNumberArray.forEach(item => {
        const number = Number(item);
        if (this.isRange(number) === false) {
          throw new Error(ERROR_MESSAGE.range);
        }
        set.add(item);
      });
      const isOverlap = set.size !== prizeNumberArray.length;

      if (isOverlap) throw new Error(ERROR_MESSAGE.overlapPrize);
      if (prizeNumberArray.length !== 6)
        throw new Error(ERROR_MESSAGE.manyInputPrize);

      this.#userPrizeNumber = prizeNumberArray;
    });
  }

  setBonusNumber() {
    Console.readLine(QUESTION_MESSAGE.bonus, number => {
      if (this.#userPrizeNumber.includes(number) === true)
        throw new Error(ERROR_MESSAGE.overlapBonus);
      if (number.includes(',') === true)
        throw new Error(ERROR_MESSAGE.manyInputBonus);
      if (this.isRange(number) === false) {
        throw new Error(ERROR_MESSAGE.range);
      }
      this.#userBonusNumber = number;
    });
  }

  isRange(number) {
    if (number >= 1 && number <= 45) return true;
    return false;
  }
}

const app = new App();

app.play();

module.exports = App;
