const { TYPE } = require('./constants');
const regex = /[^0-9]/;

class Validator {	
	static isNum(numbers, type) {
    numbers.forEach((num) => {
      if (regex.test(num)) {
        throw new Error(`[ERROR] ${type} 번호는 숫자여야 합니다.`);
      }
    });
  }

	static isEnoughNumbers(numbers, type) {
		if (type === TYPE.BONUS && numbers.length !== 7) {
			throw new Error(`[ERROR] ${type} 번호의 개수가 맞지 않습니다.`);
		}
    if ((type === TYPE.WINNINGNUM || type === TYPE.LOTTO) && numbers.length !== 6) {
			throw new Error(`[ERROR] ${type} 번호의 개수가 맞지 않습니다.`);
		}
  }

  static isNumsInRange(numbers, type) {
    numbers.forEach((num) => {
      if (parseInt(num) < 1 || parseInt(num) > 45) {
        throw new Error(`[ERROR] ${type} 번호는 (1 ~ 45) 범위 내의 숫자여야 합니다.`);
      }
    })
  }

  static isDuplicated(numbers, type) {
    const duplicateCheck = new Set(numbers);

    if (duplicateCheck.size !== numbers.length) {
      throw new Error(`[ERROR] ${type} 번호는 중복되지 않아야 합니다.`);
    }
  }
}

module.exports = Validator;
