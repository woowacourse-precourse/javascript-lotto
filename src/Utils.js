class Utils {
  static isNumber(number) {
    return !Number.isNaN(number) && typeof number === "number";
  }
  static error(msg) {
    throw new Error(`[ERROR] ${msg}`);
  }
}

module.exports = Utils;
