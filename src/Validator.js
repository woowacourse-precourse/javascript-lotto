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

      static isRightLength (numbers) {
        if (numbers.length !== 6) {
          throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
        }
      }

      static isDuplicate (numbers) {
        if (numbers.length - Array.from(new Set(numbers)).length === 0) {
          return true;
        }
        throw new Error('[ERROR] 중복되지 않은 값을 입력하세요.');
      }

      static isRightRange (numbers) {
        for (let idx = 0; idx < numbers.length; idx++) {
          if (numbers[idx] > 45 || numbers[idx] < 1) {
            throw new Error('[ERROR] 1-45사이의 수를 입력하세요.');
          }
        }
      }

      static isBonusRange (number) {
        if (1 <= number && number <= 45) {
          return true;
        }
        throw new Error('[ERROR] 1-45사이의 수를 입력하세요.');
      }

      static isSame (string, winArray) {
        if (winArray.includes(string)) {
          throw new Error('[ERROR] 보너스 번호는 다른 값을 입력하세요.');
        }
      }

      static inputPurchase (string) {
        this.isBlank(string);
        this.isNumber(string);
        this.isPurchaseUnit(string);
      }

      static inputWinNumber (numbers) {
        this.isBlank(numbers);
        this.isRightLength(numbers);
        this.isDuplicate(numbers);
        this.isRightRange(numbers);
        return numbers;
      }

      static inputBonusNumber (string, winArray) {
        this.isBlank(string);
        this.isNumber(string);
        this.isBonusRange(string);
        this.isSame(string, winArray);
      }
  
}
  
  module.exports = Validator;
  