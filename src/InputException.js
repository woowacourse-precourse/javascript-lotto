const { ERR_PREFIX } = require('./constans');

class InputException {
  isNotANumber(value) {
    if (isNaN(value)) {
      throw new Error(`${ERR_PREFIX} 숫자만 입력할 수 있습니다.`);
    }
  }

  isNegativeOrZero(value) {
    if (Math.sign(value) !== 1) {
      throw new Error(`${ERR_PREFIX} 양수만 입력할 수 있습니다.`);
    }
  }

  isNotDivisibleBy1000(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(`${ERR_PREFIX} 1000원 단위로 입력할 수 있습니다.`);
    }
  }

  isNoValue(value) {
    if (value === '') {
      throw new Error(`${ERR_PREFIX} 값을 입력해야 합니다.`);
    }
  }

  isInCorrectLength(numbers, count) {
    if (numbers.length !== count) {
      throw new Error(`${ERR_PREFIX} ${count}개의 번호를 입력해야 합니다.`);
    }
  }

  isNotRange(numbers) {
    const filteredNumber = numbers.filter(
      (number) => this.isNotANumber(number) || number <= 0 || number > 45
    );

    if (filteredNumber.length) {
      throw new Error(`${ERR_PREFIX} 1~45까지의 숫자를 입력해야 합니다.`);
    }
  }

  isDuplicates(numbers) {
    const length = numbers.length;
    const size = new Set(numbers).size;

    if (length !== size) {
      throw new Error(`${ERR_PREFIX} 중복된 번호가 없이 입력해야 합니다.`);
    }
  }

  handlePurchaseAmountException(amount) {
    this.isNoValue(amount);
    this.isNotANumber(amount);
    this.isNegativeOrZero(amount);
    this.isNotDivisibleBy1000(amount);
  }

  handleWinningNumbersException(numbers) {
    this.isNoValue(numbers);
    this.isInCorrectLength(numbers, 6);
    this.isNotRange(numbers);
    this.isDuplicates(numbers);
  }

  handleBonusNumberException(number) {
    this.isNoValue(number);
    this.isNotRange([number]);
  }

  handleBelongException(numbers, number) {
    if (numbers.includes(number)) {
      throw new Error(`${ERR_PREFIX} 당첨 번호에 없는 숫자를 입력해야 합니다.`);
    }
  }
}

module.exports = InputException;
