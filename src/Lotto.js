const Console = require("./Console");
const Validator = require("./validator/Validator");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!Validator.isValidLottoNum(numbers)) return;
    if (!numbers.every((num) => Validator.isValidLottoType(num))) return;
    if (!Validator.isValidLottoRange(numbers, [1, 45])) return;
    if (Validator.isDuplicatedLotto(numbers)) return;
  }

  static caculateLottoNumPerUnit(price, unit = 1000) {
    return Math.floor(price / unit);
  }

  static printLottos(lottos) {
    lottos.forEach((lotto) => Console.print("[" + lotto.join(", ") + "]"));
  }

  get getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
