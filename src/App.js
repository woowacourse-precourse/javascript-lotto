const COMMAND = require('../util/Message');
const { Console } = require('@woowacourse/mission-utils');
const CreateLotto = require('./CreateLotto');

class App {
  play() {
    this.getUserInput(COMMAND.MONEY);
  }

  getUserInput(message) {
    Console.readLine(message, (answer) => {
      CreateLotto.print(parseInt(answer));
    });
  }
}

const app = new App();
app.play();

module.exports = App;
