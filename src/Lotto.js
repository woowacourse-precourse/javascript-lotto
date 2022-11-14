const lottoConst = require("./constant/LottoConst");

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
      throw new Error(lottoConst.ERROR_NOT_LENGTH_SIX);
    }
  }

  checkNumberRanges(numbers) {
    numbers.forEach((item) => {
      if (item < 1 || item > 45) {
        throw new Error(lottoConst.ERROR_OUT_OF_RANGE);
      }
    });
  }

  checkNoSameNumber(numbers) {
    const arrayRemovedDuplicate = new Set(numbers);

    if (arrayRemovedDuplicate.size !== 6) {
      throw new Error(lottoConst.ERROR_SAME_NUMBER_EXIST);
    }
  }

  static getArrayedUserInput(userInput) {
    const arrayedUserInput = userInput.split("");

    return arrayedUserInput;
  }

  static checkUesrInputHaveOnlyNumberAndComma(arrayedUserInput) {
    arrayedUserInput.forEach((item) => {
      const ASCII = item.charCodeAt();

      if ((ASCII !== 44 && ASCII < 48) || ASCII > 57) {
        throw new Error(lottoConst.ERROR_NOT_NUMBER_AND_COMMA);
      }
    });
  }

  static getSplitedUserInput(userInput) {
    const splitedInput = userInput.split(",");

    return splitedInput;
  }

  static checkWinningNumberStartZero(userInput) {
    userInput.forEach((item) => {
      if (item[0] === "0") {
        throw new Error(lottoConst.ERROR_DONT_START_ZERO);
      }
    });
  }

  static getUserLotto(userInput) {
    const userLotto = userInput.map((item) => Number(item));

    return userLotto;
  }
}

module.exports = Lotto;
