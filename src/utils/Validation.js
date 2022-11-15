const { MAX_LENGTH } = require("./Constants");

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

  isValidateLength(array) {
    if (array.length !== MAX_LENGTH)
      throw new Error("[ERROR] 로또의 길이가 유효하지 않습니다.");
  }

  isNotNumber(item) {
    if (isNaN(item))
      throw new Error("[ERROR] 로또에 숫자 형식만 넣을 수 있습니다.");
  }
}

module.exports = Validation;
