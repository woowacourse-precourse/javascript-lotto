const Validator = require('./Validator');
const Console = require('./Console');

class DataChecker {
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

  static isValidRowDataOfPurchaseAmount(rowData) {
    if (!Validator.checkTruthy(rowData)) {
      Console.close();
      throw new Error(`${DataChecker.#errorMessage.head} ${DataChecker.#errorMessage.falsy}`);
    }

    if (!Validator.checkStringType(rowData)) {
      Console.close();
      throw new Error(`${DataChecker.#errorMessage.head} ${DataChecker.#errorMessage.type}`);
    }

    if (!Validator.checkOnlyNumbersInString(rowData)) {
      Console.close();
      throw new Error(`${DataChecker.#errorMessage.head} ${DataChecker.#errorMessage.format}`);
    }
  }

  static isValidPurchaseAmount(purchaseAmount) {
    if (!Validator.checkTruthy(purchaseAmount)) {
      Console.close();
      throw new Error(`${DataChecker.#errorMessage.head} ${DataChecker.#errorMessage.falsy}`);
    }

    if (!Validator.checkNumberType(purchaseAmount)) {
      Console.close();
      throw new Error(`${DataChecker.#errorMessage.head} ${DataChecker.#errorMessage.type}`);
    }

    if (!Validator.checkDividedBy1000(purchaseAmount)) {
      Console.close();
      throw new Error(`${DataChecker.#errorMessage.head} ${DataChecker.#errorMessage.unit}`);
    }
  }

  static isValidRowDataOfSixNumbers(rowData) {
    if (!Validator.checkTruthy(rowData)) {
      Console.close();
      throw new Error(`${DataChecker.#errorMessage.head} ${DataChecker.#errorMessage.falsy}`);
    }

    if (!Validator.checkStringType(rowData)) {
      Console.close();
      throw new Error(`${DataChecker.#errorMessage.head} ${DataChecker.#errorMessage.type}`);
    }

    if (!Validator.checkFormatSixNumbers(rowData)) {
      Console.close();
      throw new Error(`${DataChecker.#errorMessage.head} ${DataChecker.#errorMessage.format}`);
    }
  }

  static isValidSixNumbers(sixNumbers) {
    if (!Validator.checkTruthy(sixNumbers)) {
      Console.close();
      throw new Error(`${DataChecker.#errorMessage.head} ${DataChecker.#errorMessage.falsy}`);
    }

    if (!Validator.checkArrayType(sixNumbers)) {
      Console.close();
      throw new Error(`${DataChecker.#errorMessage.head} ${DataChecker.#errorMessage.type}`);
    }

    if (!Validator.checkNumberInArrayType(sixNumbers)) {
      Console.close();
      throw new Error(`${DataChecker.#errorMessage.head} ${DataChecker.#errorMessage.type}`);
    }

    if (!Validator.checkSixLength(sixNumbers)) {
      Console.close();
      throw new Error(`${DataChecker.#errorMessage.head} ${DataChecker.#errorMessage.length}`);
    }

    if (!Validator.checkSixNumbersRange(sixNumbers)) {
      Console.close();
      throw new Error(`${DataChecker.#errorMessage.head} ${DataChecker.#errorMessage.range}`);
    }

    if (!Validator.checkUniqueNumber(sixNumbers)) {
      Console.close();
      throw new Error(`${DataChecker.#errorMessage.head} ${DataChecker.#errorMessage.duplication}`);
    }
  }

  static isValidRowDataOfBonus(rowData) {
    if (!Validator.checkTruthy(rowData)) {
      Console.close();
      throw new Error(`${DataChecker.#errorMessage.head} ${DataChecker.#errorMessage.falsy}`);
    }

    if (!Validator.checkStringType(rowData)) {
      Console.close();
      throw new Error(`${DataChecker.#errorMessage.head} ${DataChecker.#errorMessage.type}`);
    }

    if (!Validator.checkOnlyNumbersInString(rowData)) {
      Console.close();
      throw new Error(`${DataChecker.#errorMessage.head} ${DataChecker.#errorMessage.format}`);
    }
  }

  static isValidBonus(bonus, sixNumbers) {
    if (!Validator.checkTruthy(bonus)) {
      Console.close();
      throw new Error(`${DataChecker.#errorMessage.head} ${DataChecker.#errorMessage.falsy}`);
    }

    if (!Validator.checkNumberType(bonus)) {
      Console.close();
      throw new Error(`${DataChecker.#errorMessage.head} ${DataChecker.#errorMessage.type}`);
    }

    if (!Validator.checkRangeOfLottoNumber(bonus)) {
      Console.close();
      throw new Error(`${DataChecker.#errorMessage.head} ${DataChecker.#errorMessage.range}`);
    }

    if (!Validator.checkUniqueNumber([...sixNumbers, bonus])) {
      Console.close();
      throw new Error(`${DataChecker.#errorMessage.head} ${DataChecker.#errorMessage.duplication}`);
    }
  }
}

module.exports = DataChecker;
