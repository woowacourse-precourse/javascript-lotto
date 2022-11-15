const Constant = require("./Constant");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    let uniqueNumbersLength = [...new Set(numbers)].length;
    if (numbers.length !== 6) {
      throw new Error(Constant.LOTTO_NUMBERS_LENGTH_SHOULD_BE6);
    }
    if (numbers.length !== uniqueNumbersLength) {
      throw new Error(Constant.LOTTO_NUMBERS_SHOULD_BE_UNIQUE);
    }
  }

  get numbers() {
    return this.#numbers;
  }

  compare(lottoNumbers, bonusNumber) {
    let countArr = [];
    lottoNumbers.forEach((lottoNumber) => {
      let countSameNumber = this.compareBetween(lottoNumber);
      if (countSameNumber === 5) {
        countArr.push({
          countSameNumber,
          bonusNumber: this.checkHasBonusNumber(lottoNumber, bonusNumber),
        });
        return;
      }
      countArr.push({ countSameNumber });
    });
    return countArr;
  }

  compareBetween(lottoNumber) {
    return lottoNumber.reduce((count, number) => {
      if (this.#numbers.includes(number)) {
        count += 1;
      }
      return count;
    }, 0);
  }

  // makeCountObject(countArr) {
  //   return countArr.reduce((countObject, count) => {
  //     countObject[count] = (countObject[count] || 0) + 1;
  //     return countObject;
  //   }, {});
  // }

  checkHasBonusNumber(lottoNumber, bonusNumber) {
    return !!lottoNumber.includes(bonusNumber);
  }
}

module.exports = Lotto;
