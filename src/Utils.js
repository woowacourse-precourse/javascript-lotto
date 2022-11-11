class Utils {
  isBlank(input) {
    return !input;
  }

  isNumber(input) {
    return !isNaN(input);
  }

  isThousandUnit(input) {
    return (input % 1000 === 0);
  }

  throwError(comment) {
    throw new Error(comment);
  }
}

module.exports = Utils;