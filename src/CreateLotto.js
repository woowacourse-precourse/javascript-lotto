const { Console } = require('@woowacourse/mission-utils');
const COMMAND = require('../util/Message');

class CreateLotto {
  static print(money) {
    const lottoNum = money / 1000;
    Console.print('\n' + lottoNum.toString() + COMMAND.LOTTONUM);
  }
}

module.exports = CreateLotto;
