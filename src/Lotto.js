const { Console, Random } = require("@woowacourse/mission-utils");
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

    //d
  }

  validate(numbers) {
    this.#numbers = numbers;

    if (checkRange(this.#numbers) === false) {
      throw new Error(`[ERROR] 0은 입력이 불가능합니다.`);
    }

    if (checkComma(this.#numbers) === false) {
      throw new Error(`[ERROR] ,이 연속으로 입력되었습니다.`);
    }

    if (checkNumLength(this.#numbers) === false) {
      throw new Error(`[ERROR] 당첨 번호는 1~45 사이에 있습니다.`);
    }
    if (checkCount(this.#numbers) === false) {
      throw new Error(`[ERROR] 당첨 번호는 6개만 입력이 가능합니다.`);
    }
    if (checkDuplication(this.#numbers) === false) {
      throw new Error(`[ERROR] 당첨 번호에 중복이 있을 수 없습니다.`);
    }
  }
}
module.exports = Lotto;
