const Console = require('./Console');

class InputConsole {
  static getMoney = () => Console.Input('구입금액을 입력해 주세요.');
}

export default InputConsole;
