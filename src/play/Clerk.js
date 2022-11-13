const Mission = require("@woowacourse/mission-utils");
const { GAME_MESSAGES } = require("../utils/Constants");
const QuickPick = require("../input/QuickPick");
const Lotto = require("../input/Lotto");
const Bonus = require("../input/Bonus");

class Clerk {
  #payment;
  #myLottoArray;
  #lottoAmount;
  #winningNumbers;
  #bonusNumber;

  inputLottoAmount() {
    Mission.Console.readLine(GAME_MESSAGES.ASK_TO_PAY, (payment) => {
      const quickPick = new QuickPick(payment);
      this.#payment = payment;
      this.#myLottoArray = quickPick.arrayOutput();
      this.#lottoAmount = quickPick.amountOutput();
      this.inputWinningNumbers();
    });
    return;
  }

  inputWinningNumbers() {
    Mission.Console.readLine(GAME_MESSAGES.ASK_TO_WINNING_NUMBERS, (winNumbers) => {
      const winningNum = winNumbers
        .split(",")
        .map((value) => Number(value))
        .sort((a, b) => a - b);
      const lotto = new Lotto(winningNum);
      this.#winningNumbers = lotto.output();
      this.inputBonusNumber();
    });
    return;
  }

  inputBonusNumber() {
    Mission.Console.readLine(GAME_MESSAGES.ASK_TO_BONUS_NUMBER, (bonusNumber) => {
      const bonus = new Bonus(bonusNumber, this.#winningNumbers);
      this.#bonusNumber = bonus.output();
    });
    return;
  }
}

module.exports = Clerk;
