class Utils {
  static transformArrayToString(array, separator = ", ") {
    return `[${array.join(separator)}]`;
  }
}

module.exports = Utils;
