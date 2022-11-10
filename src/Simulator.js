const Console = require('./utils/Console');

const buyMessage = '구입금액을 입력해 주세요.\n';

class Simulator {
  static execute(lottoGame) {
    Console.readLine(buyMessage, lottoGame);
  }
}

module.exports = Simulator;
