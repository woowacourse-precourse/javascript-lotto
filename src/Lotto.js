const { ERROR } = require("./data/Constants");

function checkRange(arr) {
  if (/^[0-9]*$/g.test(arr.join("")) === false) {
    return false;
  }
}
function checkComma(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ``) {
      return false;
    }
  }
}

function checkNumLength(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 45 || arr[i] < 1) {
      return false;
    }
  }
}

function checkCount(arr) {
  if (arr.length !== 6) {
    return false;
  }
}
function checkDuplication(arr) {
  let checkarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (checkarr.includes(arr[i])) {
      return false;
    }
    checkarr.push(arr[i]);
  }
}

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.#numbers = numbers;

    if (checkRange(this.#numbers) === false) {
      throw new Error(ERROR.ERROR_WINNING_NUM_ZERO);
    }

    if (checkComma(this.#numbers) === false) {
      throw new Error(ERROR.ERROR_WINNING_NUM_COMMA);
    }

    if (checkNumLength(this.#numbers) === false) {
      throw new Error(ERROR.ERROR_WINNING_NUM_RANGE);
    }
    if (checkCount(this.#numbers) === false) {
      throw new Error(ERROR.ERROR_WINNING_NUM_LENGTH);
    }
    if (checkDuplication(this.#numbers) === false) {
      throw new Error(ERROR.ERROR_WINNING_NUM_DUPLICATION);
    }
  }
}

module.exports = Lotto;
