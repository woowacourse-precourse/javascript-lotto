const { Console, Random } = require('@woowacourse/mission-utils');
const Purchase = require('./Purchase');
const Lotto = require('./Lotto');

class App {
  play() {
    this.inputMessage('구입금액을 입력해 주세요.', (amount) => {
      new Purchase(amount);
    });
  }
  inputMessage(text, callback) {
    Console.readLine(text, callback.bind(this));
  }
}

const app = new App();
app.play();

module.exports = App;
