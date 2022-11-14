const User = require('./User');
const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('./MESSAGE');

class App {
  play() {
    this.user = new User();
    this.getMoney();
  }

  getMoney() {
    Console.readLine(MESSAGE.ENTERPRICE, (money) => {
      this.user.buyLottos(money);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
