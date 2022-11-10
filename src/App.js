const { Console } = require('@woowacourse/mission-utils');
const Store = require('./Store');
class App {
  play() {
    this.buyLotto();
  }

  buyLotto() {
    Console.readLine('구입금액을 입력해 주세요.', (money) => {
      console.log(money);
      const store = new Store(money);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
