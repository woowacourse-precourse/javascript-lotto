const { EXCEPTIONS } = require('../../constant/constant');
const checkNumber = (number) => {
  if (!isNaN(number)) {
    return false;
  }
};

module.exports = {
  checkNumber,
};
