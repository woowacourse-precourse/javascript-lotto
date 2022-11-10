const Validator = require("./utils/Validator");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateLotto(numbers);
    this.#numbers = numbers;
  }

  validateLotto(numbers) {
    if (numbers.length !== 6) throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    if (new Set(numbers).size !== 6) throw new Error("[ERROR] 중복된 번호가 존재합니다.");
    if (!numbers.every(Validator.isNumber)) throw new Error("[ERROR] 숫자가 아닌 번호가 존재합니다.");
    if (!numbers.every(Validator.isLottoNumberFrom1to45)) throw new Error("[ERROR] 로또 번호가 1~45 사이가 아닙니다.");
    return true;
  }

  get lotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;
