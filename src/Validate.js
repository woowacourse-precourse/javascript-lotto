const { Console } = require("@woowacourse/mission-utils");
class validate {
  // 숫자인지 체크
  checkNumber() {}
  // 숫자 범위 체크
  checkLength() {}
  // 숫자 중복되어 있는지 체크
  checkInclude(number) {
    const set = new Set(number);
    if (set.size !== 6) {
      throw new Error("[ERROR] 중복된 숫자가 존재합니다.");
    }
  }
}
module.exports = validate;
