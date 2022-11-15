class Validator {
  static isAscending(numbers) {
    const isAscending = numbers.every(
      (value, index, array) => !index || array[index - 1] <= value
    );
    return isAscending;
  }

  static isIntegerInput(value) {
    return Number.isNaN(value) || value.match(/\D+/);
  }

  static isArrayOfInteger(array) {
    return array.every((value) => Number.isInteger(value));
  }
}

module.exports = Validator;
