const Mission = require("@woowacourse/mission-utils");
const { GAME_MESSAGES } = require("../utils/Constants");
const QuickPick = require("../input/QuickPick");

class Clerk {
  #payment;
  #myLottoArray;
  #lottoAmount;

  inputLottoAmount() {
    Mission.Console.readLine(GAME_MESSAGES.ASK_TO_PAY, (payment) => {
      const quickPick = new QuickPick(payment);
      this.#payment = payment;
      this.#myLottoArray = quickPick.arrayOutput();
      this.#lottoAmount = quickPick.amountOutput();
      Mission.Console.close();
    });
  }
}

module.exports = Clerk;
