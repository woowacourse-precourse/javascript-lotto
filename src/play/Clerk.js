const Mission = require("@woowacourse/mission-utils");

class Clerk {
  inputLottoAmount() {
    Mission.Console.readLine("구입금액을 입력해 주세요.", (payment) => {
      Mission.Console.close();
    });
  }
}

module.exports = Clerk;
