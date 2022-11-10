const Console = require('./utils/Console');

const buyMessage = '구입금액을 입력해 주세요.\n';

class Lotto {
  #numbers;

  constructor() {}

  buy(startLottoSimulation) {
    Console.readLine(buyMessage, startLottoSimulation);
  }
}

module.exports = Lotto;
