const { ERROR_INPUT_MESSAGE } = require("./constants");

class Validation {
  amountType(value) {
    if (typeof value === "number") {
      return true;
    }
  }

  stringType(value) {
    if (typeof value === "string") {
      return true;
    }
  }

  amountUnit(value) {
    if (value % 1000 === 0) {
      return true;
    }
  }

  // checkTickets(amount, purchased) { //circular import -> class undefined error
  //   const player = new Player();
  //   // if (player.buyTickets(amount) !== purchased.length) {
  //   //   throw new Error(ERROR_LOGIC_MESSAGE.ISSUE);
  //   // }
  // }

  // numbers : [1,2,3,4,5,6]
  checkSixNumbers(array) {
    this.formatArray(array);
    this.type(array);
    this.range(array);
    this.lengthSix(array);
    this.duplication(array);
    return array;
  }

  //string : '1,2,3,4,5,6'
  checkSixString(string) {
    if (this.stringType(string)) {
      const resolved = string.split(",").map((el) => Number(el));
      this.formatStringSix(resolved);
      this.type(resolved);
      this.range(resolved);
      this.lengthSix(resolved);
      this.duplication(resolved);
      return string;
    }
  }

  checkOneString(string) {
    if (this.stringType(string)) {
      const resolved = string.split(",").map((el) => Number(el));
      this.formatStringOne(resolved);
      this.type(resolved);
      this.range(resolved);
      this.lengthOne(resolved);
      return string;
    }
  }

  type(numbers) {
    if (
      numbers.filter((el) => typeof el !== "number" || isNaN(el)).length !== 0
    ) {
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
    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_INPUT_MESSAGE.DUPLICATION);
    }
  }

  formatArray(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error(ERROR_INPUT_MESSAGE.FORMAT_ARRAY);
    }
  }

  formatStringSix(resolved) {
    if (isNaN(resolved) && resolved.length !== 6) {
      throw new Error(ERROR_INPUT_MESSAGE.FORMAT_STRING);
    }
  }

  formatStringOne(resolved) {
    if (isNaN(resolved) && resolved.length !== 1) {
      throw new Error(ERROR_INPUT_MESSAGE.FORMAT_STRING_ONE);
    }
  }
}

module.exports = Validation;
