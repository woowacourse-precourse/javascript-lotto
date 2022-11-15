const Validation = require("./Validation");
const { ERROR_INPUT_MESSAGE, ERROR_LOGIC_MESSAGE } = require("./constants");

class Player {
  buyTickets(amount) {
    const validation = new Validation();

    if (isNaN(amount)) {
      throw new Error(ERROR_INPUT_MESSAGE.TYPE);
    }

    if (!validation.amountUnit(amount)) {
      throw new Error(ERROR_INPUT_MESSAGE.UNIT);
    }

    return amount / 1000;
  }

  checkTickets(amount, purchased) {
    if (this.buyTickets(amount) !== purchased.length) {
      throw new Error(ERROR_LOGIC_MESSAGE.ISSUE);
    }
  }

  // insertNumbers() {
  //   MissionUtils.Console.readLine(INGAME_INPUT.WINNING_NUMBERS, (numbers) => {
  //     new Validation().checkSixString(numbers);
  //     MissionUtils.Console.print(numbers);

  //     this.insertBonusNumber(numbers);
  //   });
  // }

  // insertBonusNumber(numbers) {
  //   MissionUtils.Console.readLine(INGAME_INPUT.WINNING_BONUS, (bonus) => {
  //     new Validation().checkOneString(bonus);
  //     MissionUtils.Console.print(bonus);

  //     this.returnWinning(numbers, bonus);
  //   });
  // }

  // returnWinning(numbers, bonus) {
  //   const win = stringToArray(numbers);
  //   const bonusWin = stringToArray(bonus);
  //   return { win, bonusWin };
  // }
}

module.exports = Player;
