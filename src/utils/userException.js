const { ERROR_TEXT } = require('../const/text');

const isNotNumber = (userEnterAmount) => {
  if(isNaN(userEnterAmount) || /\s/g.test(userEnterAmount)) {
    throw new Error(ERROR_TEXT.AMOUNT_NOT_NUMBER);
  }
}

const isInDivisible = (userEnterAmount) => {
  if(Number(userEnterAmount) % 1000 !== 0) {
    throw new Error(ERROR_TEXT.AMOUNT_INDIVISIBLE)
  }
}

const userException = {
  isNotNumber, 
  isInDivisible
};

module.exports = userException;