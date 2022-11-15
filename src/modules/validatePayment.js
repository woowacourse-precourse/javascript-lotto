const { ERROR_MESSAGE } = require("../constant/message");

const validatePayment = (input) => {
  const payment = parseInt(input);
  if (isNaN(input)) {
    throw new Error(ERROR_MESSAGE.NOT_NUMBER);
  } else if (payment < 1000) {
    throw new Error(ERROR_MESSAGE.LESS_MONEY);
  } else if (payment % 1000 !== 0) {
    throw new Error(ERROR_MESSAGE.NOT_DIVIDED);
  }
};

module.exports = validatePayment;
