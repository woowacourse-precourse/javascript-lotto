const { Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class validate {
  check(number) {
    this.checkNumber(number);
    this.checkLength(number);
    this.checkDuplication(number);
    this.checkRange(number);
  }

  checkNumber(number) {
    for (let i = 0; i < number.length; i++) {
      const check = /\d/;

      if (!check.test(number[i])) {
        throw new Error("[ERROR] 문자열이 포함되어 있습니다.");
      }
    }
  }
  // 숫자 범위 체크
  checkLength(number) {
    this.lotto = new Lotto(number);
  }

  checkDuplication(number) {
    const set = new Set(number);
    if (set.size !== 6) {
      throw new Error("[ERROR] 중복된 숫자가 존재합니다.");
    }
  }

  checkRange(number) {
    for (let i = 0; i < number.length; i++) {
      const check = /^[1-9]{1}$|^[1-4]{1}[0-5]{1}$|^45$/;
      if (!check.test(number[i])) {
        throw new Error("[ERROR] 1부터 45까지의 숫자만 입력할 수 있습니다.");
      }
    }
  }
}
module.exports = validate;
