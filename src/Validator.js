class Validator {
    static isBlank (string) {
      if (string.length !== 0) {
        return true;
      }
      throw new Error('[ERROR] 필수 입력 값을 입력해주세요.');
    }

    static isNumber (string) {
        if (!isNaN(string)) {
          return true;
        }
        throw new Error('[ERROR] 숫자가 아닙니다.');
      }
  
}
  
  module.exports = Validator;
  