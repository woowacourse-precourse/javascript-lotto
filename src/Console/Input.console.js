const Console = require('./Console');
const { INPUT } = require('../Resource/String');

export default class InputConsole {
  static getMoney = () => Console.Input(INPUT.GET_MONEY);
}
