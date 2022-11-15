class Validation {
  #state;
  constructor() {
    this.#state = true;
  }
  isValidateMoney(money) {
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
    }
    return this.#state;
  }
}

module.exports = Validation;
