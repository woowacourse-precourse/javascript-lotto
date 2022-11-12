class Utils {
  static transformArrayToString(array, separator = ", ") {
    return `[${array.join(separator)}]`;
  }

  static transformStringToNumberArray(string, separator = ",") {
    return string.split(separator).map((number) => parseInt(number, 10));
  }
}

module.exports = Utils;
