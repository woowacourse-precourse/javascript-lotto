// TODO: [ERROR] 부분 상수 처리
class Validator {
  static isValidInput(input) {
    // 빈입력인지
    if (!input.length) {
      throw new Error('[ERROR] 아무것도 입력하지 않았습니다.');
    }

    if (input !== input.trim()) {
      throw new Error('[ERROR] 입력에 공백이 포함되어 있습니다.');
    }

    return true;
  }
}

module.exports = Validator;
