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

  isDuplicate(array, item, index) {
    if (array.indexOf(item) !== index)
      throw new Error("[ERROR] 중복된 번호가 있습니다.");
    return this.#state;
  }
}

module.exports = Validation;
