const MissionUtils = require("@woowacourse/mission-utils");
const User = require("./User");
const Prize = require("./Prize");

class App {
  play() {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      const user = new User(money);
      user.buyLottos(parseInt(money / 1000));

      const prize = new Prize();
      prize.winningCheck(user);
		})
  }
}

module.exports = App;
