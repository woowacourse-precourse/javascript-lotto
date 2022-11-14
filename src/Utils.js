class Utils {
  transeStringToNumber(string) {
    return string.split(',').map(number => Number(number));
  }
}

module.exports = Utils;