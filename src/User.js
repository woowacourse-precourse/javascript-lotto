const MissionUtils = require("@woowacourse/mission-utils");
const Validator = require("./Validator");

class User {
  lottoList = [];

  readAmount(query, callback) {
    MissionUtils.Console.readLine(query, Validator.amount(callback));
  }

  readWinNumbers(query, callback) {
    MissionUtils.Console.readLine(query, Validator.winNumbers(callback));
  }
}

module.exports = User;
