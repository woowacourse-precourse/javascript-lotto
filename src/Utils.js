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
  generateRandomNumber(minRange, maxRange) {
    return MissionUtils.Random.pickNumberInRange(minRange, maxRange);
  },
};

module.exports = utils;
