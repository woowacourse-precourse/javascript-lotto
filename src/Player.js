const Validation = require("./Validation");
const { ERROR_INPUT_MESSAGE, ERROR_LOGIC_MESSAGE } = require("./constants");

class Player {
  constructor() {}

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

  insertNumbers() {}
  insertBonusNumber() {}
}

module.exports = Player;
