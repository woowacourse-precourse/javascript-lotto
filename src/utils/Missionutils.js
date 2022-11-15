const MissionUtils = require("@woowacourse/mission-utils");

const utils = {
  readLine(message, callback) {
    MissionUtils.Console.readLine(message, callback);
  },
  print(message) {
    MissionUtils.Console.print(message);
  },
  close() {
    MissionUtils.Console.close();
  },
  pickUniqueNumbersInRange(start, end, count) {
    return MissionUtils.Random.pickUniqueNumbersInRange(start, end, count);
  },
};

module.exports = utils;
