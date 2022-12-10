const MissionUtils = require("@woowacourse/mission-utils");
const { MAX_NUMBER, LOTTO_LEGNTH } = require("./constants/GameConfig");

class Utils {
  print(msg) {
    return MissionUtils.Console.print(msg);
  }

  readLine(query, callback) {
    MissionUtils.Console.readLine(query, callback);
  }

  close() {
    MissionUtils.Console.close();
  }

  getLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      MAX_NUMBER,
      LOTTO_LEGNTH
    ).sort();
  }
}

module.exports = new Utils();
