const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = require('./utils/constants');
const RandomNumbers = require('./RandomNumbers');

class App {
  play() {
    Console.readLine(MESSAGE.PURCHASE_AMOUT, (amount) => {
      this.amount = amount;
      // this.print(`총 구매 갯수: ${parseInt(this.amount / 1000)}`);
      this.print('랜덤넘버 : ' + RandomNumbers.generate());
    });
  }

  print(message) {
    Console.print(message);
  }

  input(message) {
    Console.readLine(message, (input_val) => {
      return input_val;
    });
  }
}

const app = new App();
app.play();

module.exports = App;
