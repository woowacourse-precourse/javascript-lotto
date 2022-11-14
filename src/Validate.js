const { Console } = require("@woowacourse/mission-utils");

class validate {
  check(number) {
    this.checkNumber(number);
    this.checkDuplication(number);
  }

  // 숫자인지 체크
  checkNumber(number) {
    for (let i = 0; i < number.length; i++) {
      const check = /\d/;

      if (!check.test(number[i])) {
        throw new Error("[ERROR] 문자열이 포함되어 있습니다.");
      }
    }
  }
  // 숫자 범위 체크
  checkLength() {}

  checkDuplication(number) {
    const set = new Set(number);
    if (set.size !== 6) {
      throw new Error("[ERROR] 중복된 숫자가 존재합니다.");
    }
  }
}
module.exports = validate;
