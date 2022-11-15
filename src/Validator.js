const { reducer, numList } = require('./Funcs');

class Validator {
  static isNumber(target) {
    if (isNaN(target)) throw new Error('[ERROR] 숫자가 아닙니다.');
    return true;
  }

  static isValidPayAmount(cost) {
    if (cost >= 1000) return true;
    throw new Error('[ERROR] 1000원 이상의 금액을 입력해주세요.');
  }

  static isNotDuplicated(list, len = 6) {
    const set = new Set(list);
    if (set.size < len) {
      throw new Error('[ERROR] 중복된 숫자가 있습니다.');
    }
    return true;
  }

  static isNotExceedAmount(list, len = 6) {
    console.log('ok is exceed?', list, len, list.length > len);
    if (list.length > len) {
      throw new Error(`[ERROR] ${len}개 이하의 숫자를 입력하세요.`);
    }
    return true;
  }

  static isValidLottoNumber(number) {
    if (number < 1 || number > 45)
      throw new Error('[ERROR] 1~45 사이의 숫자를 입력하세요.');
    return true;
  }

  static moneyInputCheckHandler(input) {
    reducer(
      input,
      Validator.isNumber(input),
      Validator.isValidPayAmount(input),
    );
    return Number(input);
  }

  static lottoInputCheckHandler(input, len = 6) {
    console.log(input, len);
    const target = numList(input);
    reducer(
      input,
      Validator.isNotExceedAmount(target, len),
      Validator.isNotDuplicated(target, len),
    );
    return target;
  }
}
module.exports = Validator;
