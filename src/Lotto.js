const { ERROR } = require("./data/Constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.#numbers = numbers;

    if (checkOnlyNum(this.#numbers) === false) {
      throw new Error(ERROR.ERROR_WINNING_NUM_ONLY_NUM);
    }

    if (checkComma(this.#numbers) === false) {
      throw new Error(ERROR.ERROR_WINNING_NUM_COMMA);
    }

    if (checkNumRange(this.#numbers) === false) {
      throw new Error(ERROR.ERROR_WINNING_NUM_RANGE);
    }
    if (checkNumLength(this.#numbers) === false) {
      throw new Error(ERROR.ERROR_WINNING_NUM_LENGTH);
    }
    if (checkDuplication(this.#numbers) === false) {
      throw new Error(ERROR.ERROR_WINNING_NUM_DUPLICATION);
    }
  }
}
function checkOnlyNum(arr) {
  if (/^[0-9]*$/g.test(arr.join("")) === false) {
    return false;
  }
}
function checkComma(arr) {
  let i = 0;
  for (; i < arr.length; i++) {
    if (arr[i] === ``) {
      return false;
    }
  }
}

function checkNumRange(arr) {
  let i = 0;
  for (; i < arr.length; i++) {
    if (arr[i] > 45 || arr[i] < 1) {
      return false;
    }
  }
}

function checkNumLength(arr) {
  if (arr.length !== 6) {
    return false;
  }
}
function checkDuplication(arr) {
  let checkarr = [];
  let i = 0;
  for (; i < arr.length; i++) {
    if (checkarr.includes(arr[i])) {
      return false;
    }
    checkarr.push(arr[i]);
  }
}

module.exports = Lotto;
