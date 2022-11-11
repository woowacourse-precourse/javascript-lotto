const Console = require("@woowacourse/mission-utils").Console;
const BonusNumber = require("./BonusNumber");
const Result = require("./Result");

class Lotto {
  #numbers;

  constructor(amount, lottoArray, numbers) {
    this.amount = amount;
    this.lottoArray = lottoArray;
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
      const bonusNumber = new BonusNumber(this.#numbers, bonus);

      const result = new Result(
        this.amount,
        this.lottoArray,
        this.#numbers,
        bonusNumber.bonusNumber
      );
    });
  }
}

module.exports = Lotto;
