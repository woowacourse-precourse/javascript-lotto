const { Console } = require('@woowacourse/mission-utils');
class App {
  play() {
    this.buyLotto();
  }
  buyLotto() {
    Console.readLine('구입금액을 입력해 주세요.', (money) => {
      console.log(money);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
