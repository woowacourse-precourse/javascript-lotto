const { Console, Random } = require("@woowacourse/mission-utils");
const Utils = require("./Utils");
const ValidateInput = require("./ValidateInput");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers !== undefined) {
      if (numbers.length !== 6) {
        throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
      }

      if (new Set(numbers).size !== 6) {
        throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
      }

      if (numbers.toString() !== numbers.sort((a, b) => a - b).toString()) {
        throw new Error("[ERROR] 로또 번호는 오름차순 정렬되어야 합니다.");
      }
    }
  }
}

module.exports = Lotto;
