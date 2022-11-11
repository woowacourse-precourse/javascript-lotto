const { PRICE_PER_SHEET } = require('../constants');

class GameUtils {
  static filterPurchaseAmount(value) {
    const regex = /[,'원']/g;
    value = value.replace(regex, '');
    return value;
  }
  static getSheets(amount) {
    return amount / PRICE_PER_SHEET;
  }
  static removeBlank(value) {
    const regex = /\s/g;
    const nonBlank = value.replace(regex, '');
    return nonBlank;
  }
}

module.exports = GameUtils;