const { ERROR_INPUT_MESSAGE } = require("./constants");
const stringToArray = require("./utils/stringToArray");

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
      const array = stringToArray(string);

      this.formatString(array);
      this.type(array);
      this.range(array);
      this.lengthSix(array);
      this.duplication(array);
      return string;
    }
  }

  checkOneString(string) {
    if (this.stringType(string)) {
      const array = stringToArray(string);

      this.type(array);
      this.range(array);
      this.lengthOne(array);
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

  bonusDuplication(numbersArray, string) {
    if (numbersArray.includes(Number(string))) {
      throw new Error(ERROR_INPUT_MESSAGE.DUPLICATION_ONE);
    }
  }

  formatArray(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error(ERROR_INPUT_MESSAGE.FORMAT_ARRAY);
    }
  }

  formatString(resolved) {
    if (isNaN(resolved) && resolved.length !== 6) {
      throw new Error(ERROR_INPUT_MESSAGE.FORMAT_STRING);
    }
  }
}

module.exports = Validation;
