const { Console } = require('@woowacourse/mission-utils');
const Messages = require('./Messages');

class LottoManager {
  winningStatics() {
    Console.print(Messages.WINNING_STATICS);
  }
}

module.exports = LottoManager;
