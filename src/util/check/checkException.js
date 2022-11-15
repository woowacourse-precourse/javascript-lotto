const { ERROR_MESSAGE } = require('../../constant/constant');

const checkException = (error) => {
  throw new Error(ERROR_MESSAGE[error]);
};

module.exports = checkException;
