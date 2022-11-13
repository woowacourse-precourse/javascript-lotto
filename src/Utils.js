class Utils {
  static isNumber(number) {
    return !Number.isNaN(number) && typeof number === "number";
  }
  static error(msg) {
    throw new Error(`[ERROR] ${msg}`);
  }
  static toFixedsecond(number) {
    return Math.floor(number * 100) / 100;
  }
}

module.exports = Utils;
