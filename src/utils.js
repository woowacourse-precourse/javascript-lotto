const { ERROR_PREFIX, ERROR_MSG } = require('./constants');

const makeErrorMsg = (errorType) => `${ERROR_PREFIX} ${ERROR_MSG[errorType]}`;

module.exports = makeErrorMsg;
