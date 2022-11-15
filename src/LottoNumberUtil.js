const { LOTTO_ERROR_MESSAGE, AMOUNT_STANDARD } = require('./constants');

function validateMoney(number) {
  if (number < 0 || number % AMOUNT_STANDARD.ONE_THOUSAND_WON !== 0) {
    throw new Error(LOTTO_ERROR_MESSAGE.LOTTO_NUMBER_AMOUNT_ERROR);
  }
}

module.exports = {
  validateMoney,
};
