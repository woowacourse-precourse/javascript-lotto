const MissionUtils = require("@woowacourse/mission-utils");

class User {
  readAmount(query, callback) {
    MissionUtils.Console.readLine(query, (amount) => {
      callback(amount);
    });
  }
}

module.exports = User;
