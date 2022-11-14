const MissionUtils = require('@woowacourse/mission-utils');

class Console {
  static readLine(message, callback) {
    return MissionUtils.Console.readLine(message, callback);
  }

  static close() {
    return MissionUtils.Console.close();
  }

  static print(message) {
    return MissionUtils.Console.print(message);
  }
}

module.exports = Console;
