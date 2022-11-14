const COMMAND = require('../util/Message');
const { Console } = require('@woowacourse/mission-utils');

class App {
  play() {
    this.getUserInput(COMMAND.MONEY);
  }

  getUserInput(message) {
    Console.readLine(message, (answer) => {
      console.log(answer);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
