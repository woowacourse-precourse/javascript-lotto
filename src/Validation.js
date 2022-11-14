const { ERROR_INPUT_MESSAGE } = require("./constants");

class Validation {
  amountType(value) {
    if (typeof value === "number") {
      return true;
    }
  }

  amountUnit(value) {
    if (value % 1000 === 0) {
      return true;
    }
  }

  // numbers : [1,2,3,4,5,6]
  checkSixNumbers(array) {
    this.type(array);
    this.range(array);
    this.lengthSix(array);
    this.duplication(array);
    this.formatArray(array);
  }

  type(numbers) {
    if (numbers.filter((el) => typeof el !== "number").length !== 0) {
      throw new Error(ERROR_INPUT_MESSAGE.TYPE);
    }
  }

  range(numbers) {
    if (numbers.filter((el) => el < 1 || el > 45).length !== 0) {
      throw new Error(ERROR_INPUT_MESSAGE.RANGE);
    }
  }

  lengthOne(numbers) {
    if (numbers.length !== 1) {
      throw new Error(ERROR_INPUT_MESSAGE.LENGTH_ONE);
    }
  }

  lengthSix(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_INPUT_MESSAGE.LENGTH_SIX);
    }
  }

  duplication(numbers) {
    if (new Set(numbers) !== 6) {
      throw new Error(ERROR_INPUT_MESSAGE.DUPLICATION);
    }
  }

  formatArray(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error(ERROR_INPUT_MESSAGE.FORMAT_ARRAY);
    }
  }

  //string : '1,2,3,4,5,6'

  formatString(string) {
    if (typeof string === "string") {
      const resolved = string.split(",").map((el) => Number(el));
      // if (resolved 검증 실패){
      //   throw new Error(ERROR_INPUT_MESSAGE.FORMAT_STRING)
      // }
    }
  }
}

module.exports = Validation;
