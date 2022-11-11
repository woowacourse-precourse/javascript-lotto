const Console = require('./Console');
const { INPUT } = require('../Resource/String');

class InputConsole {
  static getMoney = () => Console.Input(INPUT.GET_MONEY);
}

export default InputConsole;
