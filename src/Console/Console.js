const MissionUtils = require('@woowacourse/mission-utils');

class Console {
  static input(message) {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(message, resolve);
    });
  }

  static Output(message) {
    MissionUtils.Console.print(message);
  }
}

module.exports = Console;