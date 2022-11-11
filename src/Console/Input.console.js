const Console = require('./Console');
const { INPUT } = require('../Resource/String');

class InputConsole {
  static getMoney = async () => Console.input(INPUT.GET_MONEY);
}

module.exports = InputConsole;
