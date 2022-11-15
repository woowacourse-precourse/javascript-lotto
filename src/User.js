class User {
  #amount;

  constructor() {
    this.#amount = amount;
  }

  isValidAmount(amount) {
    if (
      this.isNumber(amount) !== Error &&
      this.isUnitOfThousnds(amount) !== Error
    ) {
      return true;
    }
  }
}
