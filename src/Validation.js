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

  type(numbers) {
    if (numbers.filter((el) => typeof el !== "number").length !== 0) {
      throw new Error();
    }
  }

  range(numbers) {
    if (numbers.filter((el) => el < 1 || el > 45).length !== 0) {
      throw new Error();
    }
  }

  lengthOne(numbers) {
    if (numbers.length !== 1) {
      throw new Error();
    }
  }

  lengthSix(numbers) {
    if (numbers.length !== 6) {
      throw new Error();
    }
  }

  duplication(numbers) {
    if (new Set(numbers) !== 6) {
      throw new Error();
    }
  }

  formatArray(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error();
    }
  }

  //string : '1,2,3,4,5,6'

  formatString(string) {
    if (typeof string !== "string") {
      throw new Error();
    }
    if (typeof string === "string") {
      const resolved = string.split(",").map((el) => Number(el));
      // if (resolved 검증 실패){
      //   throw new Error()
      // }
    }
  }
}

module.exports = Validation;
