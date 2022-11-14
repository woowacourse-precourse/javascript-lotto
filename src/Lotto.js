const { Console } = require("@woowacourse/mission-utils");
const {
  checkDuplicatedLotto,
  checkAscendingLotto,
  checkLottoResult,
} = require("./Core/Lotto.util");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (checkDuplicatedLotto(numbers)) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
    if (!checkAscendingLotto(numbers)) {
      throw new Error("[ERROR] 로또 번호는 오름차순이어야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  checkLottoResult(compareInput, bonus) {
    return checkLottoResult(this.#numbers, compareInput.split(","), bonus);
  }

  print() {
    Console.print("[" + this.#numbers.join(", ") + "]");
  }
}

module.exports = Lotto;
