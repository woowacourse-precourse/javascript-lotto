const Console = require('../utils/Console');

class Validator {
  static #errorMessage = {
    head: '[ERROR]',
    falsy: '잘못된 입력입니다.',
    type: '잘못된 타입의 입력입니다.',
    format: '잘못된 포맷의 입력입니다.',
    unit: '잘못된 단위의 입력입니다.',
    length: '잘못된 길이의 입력입니다.',
    range: '잘못된 범위의 입력입니다.',
    duplication: '중복된 입력입니다.',
    sortByAscending: '오름차순 정렬이 되지 않았습니다.',
  };

  static #regExp = {
    number: /^[0-9]+$/,
    sixNumbers: /^[0-9|,]+$/,
  };

  static #data = {
    sixNumbersLength: 6,
    minLottoNumber: 1,
    maxLottoNumber: 45,
  };

  static checkTruthy(truthy) {
    const checker = Boolean(truthy);

    if (!checker) {
      Console.close();
      throw new Error(`${Validator.#errorMessage.head} ${Validator.#errorMessage.falsy}`);
    }
  }

  static checkStringType(string) {
    if (typeof string !== 'string') {
      Console.close();
      throw new Error(`${Validator.#errorMessage.head} ${Validator.#errorMessage.type}`);
    }
  }

  static checkOnlyNumbersInString(string) {
    if (!Validator.#regExp.number.test(string)) {
      Console.close();
      throw new Error(`${Validator.#errorMessage.head} ${Validator.#errorMessage.format}`);
    }
  }

  static checkDividedBy1000(number) {
    if (number % 1000 !== 0) {
      Console.close();
      throw new Error(`${Validator.#errorMessage.head} ${Validator.#errorMessage.unit}`);
    }
  }

  static checkNumberType(number) {
    if (typeof number !== 'number') {
      Console.close();
      throw new Error(`${Validator.#errorMessage.head} ${Validator.#errorMessage.type}`);
    }
  }

  static checkFormatSixNumbers(format) {
    if (!Validator.#regExp.sixNumbers.test(format)) {
      Console.close();
      throw new Error(`${Validator.#errorMessage.head} ${Validator.#errorMessage.format}`);
    }
  }

  static checkArrayType(array) {
    if (!Array.isArray(array)) {
      Console.close();
      throw new Error(`${Validator.#errorMessage.head} ${Validator.#errorMessage.type}`);
    }
  }

  static checkNumberInArrayType(array) {
    array.forEach(number => Validator.checkNumberType(number));
  }

  static checkSixLength(sixNumbers) {
    if (sixNumbers.length !== this.#data.sixNumbersLength) {
      Console.close();
      throw new Error(`${Validator.#errorMessage.head} ${Validator.#errorMessage.length}`);
    }
  }

  static checkSixNumbersRange(sixNumbers) {
    sixNumbers.forEach(number => Validator.checkRangeOfLottoNumber(number));
  }

  static checkRangeOfLottoNumber(lottoNumber) {
    if (lottoNumber < this.#data.minLottoNumber || lottoNumber > this.#data.maxLottoNumber) {
      Console.close();
      throw new Error(`${Validator.#errorMessage.head} ${Validator.#errorMessage.range}`);
    }
  }

  static checkUniqueNumber(numbers) {
    if (!numbers.every((number, i) => numbers.indexOf(number) === i)) {
      Console.close();
      throw new Error(`${Validator.#errorMessage.head} ${Validator.#errorMessage.duplication}`);
    }
  }
}

module.exports = Validator;
