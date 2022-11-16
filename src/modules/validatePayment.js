const { ERROR_MESSAGE } = require("../constant/message");

const validatePayment = (input) => {
  const payment = parseInt(input);
  const LOTTO_PRICE = 1000;
  if (isNaN(input)) {
    throw new Error(ERROR_MESSAGE.NOT_NUMBER);
  } else if (payment < LOTTO_PRICE) {
    throw new Error(ERROR_MESSAGE.LESS_MONEY);
  } else if (payment % LOTTO_PRICE !== 0) {
    throw new Error(ERROR_MESSAGE.NOT_DIVIDED);
  }
};

module.exports = validatePayment;
