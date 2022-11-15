const Constant = require("./Constant");
const UI = require("./utils/UI");
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
    let countArr = Constant.PRICE;
    lottoNumbers.forEach((lottoNumber) => {
      let countSameNumber = this.compareBetween(lottoNumber);
      if (
        countSameNumber === 5 &&
        this.checkHasBonusNumber(lottoNumber, bonusNumber)
      ) {
        countArr[countSameNumber + 1].count += 1;
        return;
      }
      if (countSameNumber === 6) {
        countArr[countSameNumber + 1].count += 1;
        return;
      }
      if (countSameNumber >= 3) {
        countArr[countSameNumber].count += 1;
      }
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

  checkHasBonusNumber(lottoNumber, bonusNumber) {
    return !!lottoNumber.includes(bonusNumber);
  }

  caculatePriceRate(resultObject, userInputMoney) {
    let allPrice = 0;
    for (const resultObjectKey in resultObject) {
      allPrice +=
        resultObject[resultObjectKey].price *
        resultObject[resultObjectKey].count;
    }
    return Number((allPrice / userInputMoney) * 100).toFixed(1);
  }
}

module.exports = Lotto;
