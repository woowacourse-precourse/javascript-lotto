const MissionUtils = require('@woowacourse/mission-utils');
const { number } = require('yargs');
const Console = MissionUtils.Console;

class Functions {
  static numList(input) {
    return input.split(',').map(item => number(item));
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
