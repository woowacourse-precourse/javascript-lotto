const Validator = require('./utils/Validator');
class User {
  #amount;

  constructor(amount) {
    this.#amount = amount;
    this.Validator = new Validator();
  }

  isValidAmount(amount) {
    if (
      this.Validator.isNumber(amount) !== Error &&
      this.Validator.isUnitOfThousnds(amount) !== Error
    ) {
      return true;
    }
  }
}

module.exports = User;
