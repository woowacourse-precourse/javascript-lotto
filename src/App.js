const { Console } = require('@woowacourse/mission-utils');
const LottoSeller = require('./LottoSeller');

class App {
  lottos;

  play() {
    Console.readLine('구입금액을 입력해 주세요.', (money) => {
      this.lottos = new LottoSeller().purchase(money);
      console.log(this.lottos);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
