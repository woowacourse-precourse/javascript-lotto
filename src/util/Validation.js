const { MESSAGES } = require('../constants');
const InputError = require('./Error');

class Validation {
  static isRightMoney(playerMoney) {
    if (playerMoney === 0) throw new InputError(MESSAGES.NO_MONEY);
    if (playerMoney % 1000 !== 0) throw new InputError(MESSAGES.NOT_ACCEPTABLE);
    return true;
  }
}

module.exports = Validation;
