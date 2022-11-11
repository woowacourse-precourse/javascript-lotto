const { Console, Random } = require('@woowacourse/mission-utils');
const {
  QUESTION_MESSAGE,
  ERROR_MESSAGE,
  BUY_MESSAGE,
} = require('./libs/const');

class App {
  #lottoArr = [];

  play() {
    this.start();
  }

  start() {
    Console.readLine(QUESTION_MESSAGE.buy, money => {
      if (money % 1000 !== 0) throw new Error(ERROR_MESSAGE.purchase);
      this.purchase(money);
    });
  }

  purchase(money) {}

  setLotto() {
    const randomArr = Random.pickUniqueNumbersInRange(1, 45, 6);
    const lottoArr = randomArr.sort((a, b) => a - b);
    return lottoArr;
  }
}

const app = new App();

app.play();

module.exports = App;
