const ERROR_NOT_LENGTH_SIX = "[ERROR] 로또 번호는 6개여야 합니다.";
const ERROR_OUT_OF_RANGE =
  "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.";
const ERROR_SAME_NUMBER_EXIST =
  "[ERROR] 로또 번호는 모두 다른 숫자여야 합니다.";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.checkLottoLength(numbers);
    this.checkNumberRanges(numbers);
    this.checkNoSameNumber(numbers);
    this.#numbers = numbers;
  }

  checkLottoLength(numbers) {
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
}

module.exports = Lotto;
