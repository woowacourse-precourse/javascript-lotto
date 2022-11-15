const { LOTTERY_PRICE } = require('../../constant/constant');

const allowedInterval = (number) => {
  if (number % LOTTERY_PRICE !== 0) return false;
  return true;
};

module.exports = {
  allowedInterval,
};
