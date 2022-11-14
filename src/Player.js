const Validation = require("./Validation");
const { ERROR_INPUT_MESSAGE } = require("./constants");

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

  insertNumbers(string) {}
  insertBonusNumber() {}
}

module.exports = Player;
