const { Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  play() {
    Console.readLine("구입금액을 입력해 주세요.\n", (price) => {}).bind(this);
  }
}

module.exports = App;

const app = new App();
app.play();
