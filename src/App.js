const MissionUtils = require('@woowacourse/mission-utils');
const User = require('./User');
const Prize = require('./Prize');
const Printer = require('./Printer');

class App {
  play() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      const user = new User(money);
      user.buyLottos(parseInt(money) / 1000);

      const printer = new Printer();
      printer.printLottoBundle(user.lottoBundle);

      const prize = new Prize();
      prize.winningCheck(user);
		})
  }
}

module.exports = App;
