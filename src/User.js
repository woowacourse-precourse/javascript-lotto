const MissionUtils = require("@woowacourse/mission-utils");
const Validator = require("./Validator");
const Lotto = require("./Lotto");
class User {
  lottoList = [];

  readAmount(query, callback) {
    MissionUtils.Console.readLine(query, Validator.amount(callback));
  }

  readWinNumbers(query, callback) {
    MissionUtils.Console.readLine(query, Validator.winNumbers(callback));
  }

  readBonusNumber(query, callback) {
    MissionUtils.Console.readLine(
      query,
      Validator.bonusNumber(callback).bind(
        Validator,
        Lotto.prototype.winNumbers
      )
    );
  }
}

module.exports = User;
