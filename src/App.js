const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = require('./utils/constants');

class App {
  play() {
    Console.readLine(MESSAGE.PURCHASE_AMOUT, (amount) => {
      this.print(`총 구매 : ${amount}`);
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
