const MissionUtils = require('@woowacourse/mission-utils');

const utils = {
  getUserInput(query, callback) {
    MissionUtils.Console.readLine(query, callback);
  },
  printMessage(message) {
    MissionUtils.Console.print(message);
  },
  close() {
    MissionUtils.Console.close();
  },
  generateRandomNumberArray(minRange, maxRange, length) {
    return MissionUtils.Random.pickNumberInRange(minRange, maxRange, length);
  },
};

module.exports = utils;
