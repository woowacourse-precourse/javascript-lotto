const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const text = /[^0-9,]/;
    let winNumber = new Set(numbers);
    winNumber = Array.from(winNumber);
    if (winNumber.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (text.test(winNumber)) {
      throw new Error("[ERROR] 형식이 올바르지 않습니다. ([숫자 + 쉼표] 형식을 지켜주세요)");
    }
    for (let num of winNumber) {
      if (+num > 45 || +num < 1) {
        throw new Error("[ERROR] 로또번호는 1이상 45이하여야 합니다.");
      }
      if (/\s/.test(num)) {
        throw new Error("[ERROR] 형식이 올바르지 않습니다.(공백 금지)");
      }
    }
  }

  getArr() {
    return this.#numbers;
  }
}

module.exports = Lotto;
