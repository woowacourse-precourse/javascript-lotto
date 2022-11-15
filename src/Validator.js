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

      static isPurchaseUnit (number) {
        if (number % 1000 === 0) {
          return true;
        }
        throw new Error('[ERROR] 1000단위로 입력하세요.');
      }

      static inputPurchase (string) {
        this.isBlank(string);
        this.isNumber(string);
        this.isPurchaseUnit(string);
      }
  
}
  
  module.exports = Validator;
  