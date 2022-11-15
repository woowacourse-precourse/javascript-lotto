const UserError = require("./UserError");

class Bonus {
  constructor(number) {
    this.number = number;
    this.validate(number);
  }

  validate(number) {
    const userError = new UserError();
    userError.includingCharactersError(number);
    userError.validateNumberRange([number]);
  }
}

module.exports = Bonus;
