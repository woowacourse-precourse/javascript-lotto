const { ERROR } = require('../utils/constants');

class InvalidLottoNumberRangeError extends Error {
  constructor() {
    super();
    this.message = ERROR.OUT_OF_RANGE;
  }
}

class DuplicatedLottoNumberError extends Error {
  constructor() {
    super();
    this.message = ERROR.DUPLICATED;
  }
}

class IndivisibleError extends Error {
  constructor() {
    super();
    this.message = ERROR.INDIVISIBLE;
  }
}

class InvalidLottoNumberCountError extends Error {
  constructor() {
    super();
    this.message = ERROR.INVALID_NUMBER_COUNT;
  }
}

class InvalidInputError extends Error {
  constructor() {
    super();
    this.message = ERROR.ONLY_NUMBER;
  }
}

class InvalidWinningNumberFormatError extends Error {
  constructor() {
    super();
    this.message = ERROR.ONLY_NUMBER_AND_COMMA;
  }
}

class MisuseCommaError extends Error {
  constructor() {
    super();
    this.message = ERROR.MISUSE_COMMA;
  }
}

class InvalidNumberInputError extends Error {
  constructor() {
    super();
    this.message = ERROR.IS_NAN;
  }
}

class InvalidBonusNumberError extends Error {
  constructor() {
    super();
    this.message = ERROR.DUPLICATED_BONUS;
  }
}

module.exports = {
  InvalidLottoNumberRangeError,
  DuplicatedLottoNumberError,
  IndivisibleError,
  InvalidLottoNumberCountError,
  InvalidInputError,
  InvalidWinningNumberFormatError,
  MisuseCommaError,
  InvalidNumberInputError,
  InvalidBonusNumberError,
};
