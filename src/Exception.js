const { ERROR } = require("./constant/constant.js");

class Exception {
  checkCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.COUNT);
    }
  }

  checkDuplicate(numbers) {
    let uniqueNumbers = [...new Set(numbers)];
    if (uniqueNumbers.length !== numbers.length) {
      throw new Error(ERROR.DUPLICATE);
    }
  }

  checkString(number) {
    if (number !== Number(number)) {
      throw new Error(ERROR.NUMBER_ONLY);
    }
  }

  checkRangeofNumber(number) {
    if (number < 1 || number >45){
      throw new Error(ERROR.RANGE);
    }
  }
}

module.exports = Exception;
