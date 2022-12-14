const { ISNUMBER, ISNUMBERDIVIDED, ISNUMBERBIGGER } = require('../constant/Error');

const Validatior = {
  isNumber(checkValue) {
    const check = checkValue.split('').filter((letter) => !Number.isInteger(Number(letter)));
    return check.length === 0 ? true : ISNUMBER;
  },

  isNumberDivided(checkValue, checkInfo) {
    const { checkShare } = checkInfo;
    const check = checkValue % checkShare;
    return !check ? true : ISNUMBERDIVIDED(checkShare);
  },

  isNumberBigger(checkValue, checkInfo) {
    const { checkMinimum } = checkInfo;
    const check = Number(checkValue) >= checkMinimum;
    return check ? true : ISNUMBERBIGGER(checkMinimum);
  },
};

module.exports = Validatior;
