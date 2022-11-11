const { Console } = require('@woowacourse/mission-utils');
const { QUESTION_MESSAGE, ERROR_MESSAGE } = require('./libs/const');

class App {
  play() {
    this.start();
  }

  start() {
    Console.readLine(QUESTION_MESSAGE.buy, money => {
      if (money % 1000 !== 0) throw new Error(ERROR_MESSAGE.purchase);
    });
  }
}

const app = new App();

app.play();

module.exports = App;
