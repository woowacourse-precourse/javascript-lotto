const { INVALID_INPUT } = require("./error.constants");

class InValidInputError extends Error {
  constructor(message = INVALID_INPUT.MESSAGE) {
    super(message);
    this.name = INVALID_INPUT.NAME;
  }
}

module.exports = InValidInputError;
