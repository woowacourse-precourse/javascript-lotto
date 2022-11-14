const { Console } = require("@woowacourse/mission-utils");
const LottoList = require("./LottoList");
class App {
  constructor() {
    this.lottos = new LottoList();
  }
  play() {
    this.requestMoney();
  }
  requestMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.lottos.setLottoCount(money);

      this.lottos.printLottoCount();
      this.lottos.printLottoList();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
