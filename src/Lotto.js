const LottoConst = require("./constant/LottoConst");

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
      throw new Error(LottoConst.ERROR_NOT_LENGTH_SIX);
    }
  }

  checkNumberRanges(numbers) {
    numbers.forEach((item) => {
      if (item < 1 || item > 45) {
        throw new Error(LottoConst.ERROR_OUT_OF_RANGE);
      }
    });
  }

  checkNoSameNumber(numbers) {
    const arrayRemovedDuplicate = new Set(numbers);

    if (arrayRemovedDuplicate.size !== 6) {
      throw new Error(LottoConst.ERROR_SAME_NUMBER_EXIST);
    }
  }
}

module.exports = Lotto;
