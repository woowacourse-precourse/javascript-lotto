const { ERROR } = require('../constant/constant');

function winningValidation(string) {
  checkWinningEmpty(string);
  checkWinningString(string);
  checkWinningRest(string);
  checkWinningSixNumber(string);

  return true;
}

function checkWinningEmpty(string) {
  if (string === '') {
    throw new Error(ERROR.WINNING.NOT_EMPTY);
  }
}

function checkWinningString(string) {
  if (/[^(0-9),]/gi.test(string)) {
    throw new Error(ERROR.WINNING.ONLY_NUMBER);
  }
}

function checkWinningRest(string) {
  const split = string.split(',');
  if (Math.min(...split) < 1 || Math.max(...split) > 45) {
    throw new Error(ERROR.WINNING.COMMA_SEPARATED);
  }
}

function checkWinningSixNumber(string) {
  const split = string.split(',');
  if (new Set(split).size !== 6) {
    throw new Error(ERROR.WINNING.NOT_OVERLAP_SIX_NUMBER);
  }
}

module.exports = {
  winningValidation,
  checkWinningEmpty,
  checkWinningString,
  checkWinningRest,
  checkWinningSixNumber,
};
