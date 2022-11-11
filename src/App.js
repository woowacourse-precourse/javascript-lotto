const { Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { ERROR_MESSAGE } = require("./util/errorMessage");

class App {
  play() {
    Console.readLine("구입금액을 입력해 주세요.\n", (price) => {
      const lottoCnt = this.getLottoCnt(+price);
    });
  }

  getLottoCnt(price) {
    if (typeof price !== "number") throw ERROR_MESSAGE.enter;
    if (price % 1000 !== 0) throw ERROR_MESSAGE.enter;
    return price / 1000;
  }
}

module.exports = App;

const app = new App();
app.play();
