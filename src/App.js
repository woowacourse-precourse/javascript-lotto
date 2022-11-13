const { Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { getCountByPay, getRandomNumbers } = require("./util/purchase");

class App {
  #lottos = [];

  play() {
    this.purchaseLottos();
  }

  purchaseLottos() {
    Console.readLine("구입금액을 입력해 주세요.\n", (price) => {
      const lottoCnt = getCountByPay(+price);

      for (let i = 0; i < lottoCnt; i++) {
        this.#lottos.push(new Lotto(getRandomNumbers()));
      }
    });
  }
}

module.exports = App;

const app = new App();
app.play();
