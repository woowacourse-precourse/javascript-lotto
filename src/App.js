const MissionUtils = require("@woowacourse/mission-utils");
const User = require("./User");
const Prize = require("./Prize");
const Print = require("./Print");

class App {
  play() {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      const user = new User(money);
      user.buyLottos(parseInt(money / 1000));

      const print = new Print();
      print.printLottoBundle(user.lottoBundle);

      const prize = new Prize();
      prize.winningCheck(user);
		})
  }
}

module.exports = App;

const app = new App();
app.play();