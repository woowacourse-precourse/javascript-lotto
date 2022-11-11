const Validator = require('./utils/Validator');
const Console = require('./utils/Console');

class Checker {
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

  static isValidPriceString(priceString) {
    if (!Validator.checkTruthy(priceString)) {
      Console.close();
      throw new Error(`${Checker.#errorMessage.head} ${Checker.#errorMessage.falsy}`);
    }

    if (!Validator.checkStringType(priceString)) {
      Console.close();
      throw new Error(`${Checker.#errorMessage.head} ${Checker.#errorMessage.type}`);
    }

    if (!Validator.checkFormatPrice(priceString)) {
      Console.close();
      throw new Error(`${Checker.#errorMessage.head} ${Checker.#errorMessage.format}`);
    }
  }

  static isValidPrice(price) {
    if (!Validator.checkTruthy(price)) {
      Console.close();
      throw new Error(`${Checker.#errorMessage.head} ${Checker.#errorMessage.falsy}`);
    }

    if (!Validator.checkNumberType(price)) {
      Console.close();
      throw new Error(`${Checker.#errorMessage.head} ${Checker.#errorMessage.type}`);
    }

    if (!Validator.checkDividedBy1000(price)) {
      Console.close();
      throw new Error(`${Checker.#errorMessage.head} ${Checker.#errorMessage.unit}`);
    }
  }

  static isValidSixNumbersString(sixNumbersString) {
    if (!Validator.checkTruthy(sixNumbersString)) {
      Console.close();
      throw new Error(`${Checker.#errorMessage.head} ${Checker.#errorMessage.falsy}`);
    }

    if (!Validator.checkStringType(sixNumbersString)) {
      Console.close();
      throw new Error(`${Checker.#errorMessage.head} ${Checker.#errorMessage.type}`);
    }

    if (!Validator.checkFormatSixNumbers(sixNumbersString)) {
      Console.close();
      throw new Error(`${Checker.#errorMessage.head} ${Checker.#errorMessage.format}`);
    }
  }

  static isValidSixNumbers(sixNumbers) {
    if (!Validator.checkTruthy(sixNumbers)) {
      Console.close();
      throw new Error(`${Checker.#errorMessage.head} ${Checker.#errorMessage.falsy}`);
    }

    if (!Validator.checkArrayType(sixNumbers)) {
      Console.close();
      throw new Error(`${Checker.#errorMessage.head} ${Checker.#errorMessage.type}`);
    }

    if (!Validator.checkNumberInArrayType(sixNumbers)) {
      Console.close();
      throw new Error(`${Checker.#errorMessage.head} ${Checker.#errorMessage.type}`);
    }

    if (!Validator.checkSixLength(sixNumbers)) {
      Console.close();
      throw new Error(`${Checker.#errorMessage.head} ${Checker.#errorMessage.length}`);
    }

    if (!Validator.checkSixNumbersRange(sixNumbers)) {
      Console.close();
      throw new Error(`${Checker.#errorMessage.head} ${Checker.#errorMessage.range}`);
    }

    if (!Validator.checkUniqueNumber(sixNumbers)) {
      Console.close();
      throw new Error(`${Checker.#errorMessage.head} ${Checker.#errorMessage.duplication}`);
    }
  }
}

module.exports = Checker;
