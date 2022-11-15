class Validator {
  static isAscending(numbers) {
    const isAscending = numbers.every(
      (value, index, array) => !index || array[index - 1] <= value
    );
    return isAscending;
  }
}

module.exports = Validator;
