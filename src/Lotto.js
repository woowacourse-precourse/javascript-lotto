const Console = require("@woowacourse/mission-utils").Console;
const BonusNumber = require("./BonusNumber");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.checkNumberRanges(numbers);
    this.checkNoSameNumber(numbers);
    this.#numbers = numbers;
    this.getBonusNumber();
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  checkNumberRanges(numbers) {
    numbers.forEach((item) => {
      if (item < 1 || item > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });

    return true;
  }

  checkNoSameNumber(numbers) {
    const arrayRemovedDuplicate = new Set(numbers);

    if (arrayRemovedDuplicate.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 모두 다른 숫자여야 합니다.");
    }

    return true;
  }

  getBonusNumber() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (bonus) => {
      this.bonusNumber = new BonusNumber(this.#numbers, bonus);
    });
  }
}

module.exports = Lotto;
