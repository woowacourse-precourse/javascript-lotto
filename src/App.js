const { Console, Random } = require('@woowacourse/mission-utils');
const {
  QUESTION_MESSAGE,
  ERROR_MESSAGE,
  BUY_MESSAGE,
} = require('./libs/const');

class App {
  #totalLotto = [];

  play() {
    this.start();
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
}

const app = new App();

app.play();

module.exports = App;
