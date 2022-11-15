class NumberValidator {
  constructor(numbers) {
    this.numbers = numbers;
  }

  confirm(numbers) {
    if (this.isWrongRange(numbers)) {
      return true;
    }

    if (this.isNotNumber(numbers)) {
      return true;
    }
  }

  isWrongRange(numbers) {
    return numbers.find(this.checkRange);
  }

  checkRange(number) {
    return number < 1 || number > 45;
  }

  isNotNumber(numbers) {
    return numbers.find(this.checkNumber);
  }

  checkNumber(number) {
    return !Number(number);
  }
}

module.exports = NumberValidator;
