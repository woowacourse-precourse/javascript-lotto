const MissionUtils = require('@woowacourse/mission-utils');

class Utils {
  static getUserInput(query, callback) {
    MissionUtils.Console.readLine(query, callback);
  }

  static printMessage(message) {
    MissionUtils.Console.print(message);
  }

  static close() {
    MissionUtils.Console.close();
  }

  static generateRandomNumberArray(minRange, maxRange, length) {
    return MissionUtils.Random.pickNumberInRange(minRange, maxRange, length);
  }
}

module.exports = Utils;
