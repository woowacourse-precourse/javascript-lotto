class Validation {
  static hasOnlyNumber(input, separator = "") {
    return input
      .split(separator)
      .map((eachLetter) => parseInt(eachLetter, 10))
      .every((number) => !isNaN(number));
  }
}

module.exports = Validation;
