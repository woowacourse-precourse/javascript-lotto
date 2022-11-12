const MissionUtils = require("@woowacourse/mission-utils");

const Utils = {
  print(message) {
    MissionUtils.Console.print(message);
  },

  readLine(query, callback) {
    MissionUtils.Console.readLine(query, callback);
  },

  close() {
    MissionUtils.Console.close();
  },

  pickUniqueNumbersInRange(startInclusive, endInclusive, count) {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      startInclusive,
      endInclusive,
      count,
    );
  },
};

module.exports = Utils;
