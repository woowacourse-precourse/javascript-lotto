const { EXCEPTION_MESSAGE } = require('../../constants/constants');

const makeException = (errorName) => {
  throw new Error(EXCEPTION_MESSAGE[errorName]);
};

module.exports = makeException;
