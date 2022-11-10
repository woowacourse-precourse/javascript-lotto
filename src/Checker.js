const Validator = require('./utils/Validator');
const Console = require('./utils/Console');

class Checker {
  static #errorMessage = '[ERROR]';

  static isValidPriceString(priceString) {
    if (!Validator.checkTruthy(priceString)) {
      Console.close();
      throw new Error(`${Checker.#errorMessage} 잘못된 입력입니다.`);
    }
    if (!Validator.checkStringType(priceString)) {
      Console.close();
      throw new Error(`${Checker.#errorMessage} 잘못된 타입의 입력입니다.`);
    }
    if (!Validator.checkFormat(priceString)) {
      Console.close();
      throw new Error(`${Checker.#errorMessage} 잘못된 포맷의 입력입니다.`);
    }
  }

  static isValidPrice(price) {
    if (!Validator.checkTruthy(price)) {
      Console.close();
      throw new Error(`${Checker.#errorMessage} 잘못된 입력입니다.`);
    }
    if (!Validator.checkNumberType(price)) {
      Console.close();
      throw new Error(`${Checker.#errorMessage} 잘못된 타입의 입력입니다.`);
    }
    if (!Validator.checkDividedBy1000(price)) {
      Console.close();
      throw new Error(`${Checker.#errorMessage} 잘못된 단위의 숫자 입력입니다.`);
    }
  }
}

module.exports = Checker;
