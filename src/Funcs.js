const MissionUtils = require('@woowacourse/mission-utils');

const Console = MissionUtils.Console;

class Functions {
  static numList(input) {
    const numList = input.map(item => Number(item));
    return numList;
  }

  static inputControl(input) {
    if (input.length === 1) {
      return input;
    }
    const configInput = input.replaceAll(',', ' ').split(' ');
    return configInput;
  }

  static reducer = (...func) => {
    func.reduce((acc, cur) => {
      if (acc) return cur;
    });
  };

  static read(message, callback) {
    Console.readLine(message, callback);
  }

  static print(args) {
    Console.print(args);
  }
}
module.exports = Functions;
