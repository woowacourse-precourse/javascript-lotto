const { Console } = require('@woowacourse/mission-utils');
const LottoDrawer = require('./LottoDrawer');
const LottoSeller = require('./LottoSeller');

class App {
  lottos;

  // 각 명령 다음 한 줄 비우기 \n
  play() {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.lottos = new LottoSeller().purchase(money);
      new LottoDrawer(6).drawLotto();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
