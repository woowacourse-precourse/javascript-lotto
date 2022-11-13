const { Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { ERROR_MESSAGE } = require("./util/errorMessage");
const { getCountByPay } = require("./util/purchase");

class App {
  play() {
    this.purchaseLottos();
  }

  purchaseLottos() {
    Console.readLine("구입금액을 입력해 주세요.\n", (price) => {
      const lottoCnt = getCountByPay(+price);
      console.log(lottoCnt);
    });
  }
}

module.exports = App;

const app = new App();
app.play();
