class User {
  #amount;

  constructor() {
    this.#amount = amount;
  }

  isUnitOfThousnds(amount) {
    if (+amount % 1000 !== 0) {
      throw new Error('[ERROR] 천원 단위로 입력해 주세요.');
    }
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
