const Console = require("@woowacourse/mission-utils").Console;
const BonusNumber = require("./BonusNumber");
const Result = require("./Result");

const ASK_BONUS_NUMBER = "\n보너스 번호를 입력해 주세요.\n";
const ERROR_NOT_LENGTH_SIX = "[ERROR] 로또 번호는 6개여야 합니다.";
const ERROR_OUT_OF_RANGE =
  "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.";
const ERROR_SAME_NUMBER_EXIST =
  "[ERROR] 로또 번호는 모두 다른 숫자여야 합니다.";

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
      throw new Error(ERROR_NOT_LENGTH_SIX);
    }
  }

  checkNumberRanges(numbers) {
    numbers.forEach((item) => {
      if (item < 1 || item > 45) {
        throw new Error(ERROR_OUT_OF_RANGE);
      }
    });
  }

  checkNoSameNumber(numbers) {
    const arrayRemovedDuplicate = new Set(numbers);

    if (arrayRemovedDuplicate.size !== 6) {
      throw new Error(ERROR_SAME_NUMBER_EXIST);
    }
  }

  getBonusNumber() {
    Console.readLine(ASK_BONUS_NUMBER, (bonus) => {
      const bonusNumber = new BonusNumber(this.#numbers, bonus);

      const result = new Result(
        this.amount,
        this.lottoArray,
        this.#numbers,
        bonusNumber.userBonus
      );
    });
  }
}

module.exports = Lotto;
