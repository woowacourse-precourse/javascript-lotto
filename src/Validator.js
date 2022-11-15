class Validator {
    static isBlank (string) {
      if (string.length !== 0) {
        return true;
      }
      throw new Error('[ERROR] 필수 입력 값을 입력해주세요.');
    }
  
}
  
  module.exports = Validator;
  