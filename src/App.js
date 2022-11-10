const { Console } = require('@woowacourse/mission-utils');
const Messages = require('./Messages');

class App {
  play() {
    Console.readLine(Messages.INPUT_MONEY, (money) => {
      money;
    });
  }
}

module.exports = App;
