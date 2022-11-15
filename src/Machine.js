const { Console } = require('@woowacourse/mission-utils');
const { validateWinningNumbersInput, validateBonusNumberInput } = require('./utils/inputValidate');
const Lotto = require('./Lotto');
const User = require('./User');
const Display = require('./Display');

class Machine {
  static user = new User();

  constructor(payment) {
    this.payment = Machine.user.payment = payment;
    this.quantity = Machine.user.quantity = payment / Display.info('PRICE');
  }
}

module.exports = Machine;
