const Mission = require("@woowacourse/mission-utils");
const { GAME_MESSAGES } = require("../utils/Constants");
const QuickPick = require("../input/QuickPick");

class Clerk {
  inputLottoAmount() {
    Mission.Console.readLine(GAME_MESSAGES.ASK_TO_PAY, (payment) => {
      Mission.Console.close();
    });
  }
}

module.exports = Clerk;
