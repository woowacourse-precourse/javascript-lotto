const COMMAND = require('../util/Message');
const { Console } = require('@woowacourse/mission-utils');
const CreateLotto = require('./CreateLotto');

class App {
  constructor() {
    this.lottos = [];
  }

  play() {
    this.getUserInput(COMMAND.MONEY);
  }

  getUserInput(message) {
    Console.readLine(message, (money) => {
      const createLotto = new CreateLotto(money);
      this.lottos = createLotto.make();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
