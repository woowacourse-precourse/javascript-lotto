const MissionUtils = require("@woowacourse/mission-utils");

class LottoModel {
  inputValidCheck(input) {
    if (/[^\d]/g.test(input)) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 로또 번호에 문자가 포함 되있습니다.");
    }

    if (input % 1000 !== 0) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 1,000원 단위가 아닙니다");
    }

    return input;
  }
}

module.exports = LottoModel;
