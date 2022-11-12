const MissionUtils = require('@woowacourse/mission-utils');

class Console {
  static readLine(query, callback) {
    MissionUtils.Console.readLine(query, callback);
  }

  static print(message) {
    MissionUtils.Console.print(message);
  }

  static close() {
    MissionUtils.Console.close();
  }
}

module.exports = Console;
