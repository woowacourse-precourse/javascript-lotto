const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;

class Validator {
  static isNumber(target) {
    const regExp = /^[0-9]+$/;
    target.filter(x => {
      if (!regExp.test(x)) throw new Error('[ERROR] 숫자를 입력해주세요.');
    });
    return true;
  }

  static isValidPayAmount(cost) {
    if (this.isNumber(cost) && cost >= 1000) {
      return true;
    }
    throw new Error('[ERROR] 1000원 이상의 금액을 입력해주세요.');
  }

  static isNotDuplicated(list, len) {
    const set = new Set(list);
    if (set.size !== len) {
      throw new Error('[ERROR] 중복된 숫자가 있습니다.');
    }
    return true;
  }

  static isEnough(list, len) {
    if (list.length !== len) {
      throw new Error(
        `[ERROR] ${len}개의 숫자가 필요합니다. 현재 입력된 갯수: ${list.length}`,
      );
    }
    return true;
  }
}
