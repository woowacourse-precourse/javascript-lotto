const { Console } = require('@woowacourse/mission-utils');
const { REGEX } = require('../constant/Constant');

class BetterConsole extends Console {
  static printTemplate(message) {
    Console.print(message.replace(REGEX.TEMPLATE_USELESS_WHITESPACE, ''));
  }
}

module.exports = BetterConsole;
