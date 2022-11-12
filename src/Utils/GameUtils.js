const { PRICE_PER_SHEET } = require('../constants');

class GameUtils {
  static toArray(input) {
    input = GameUtils.removeBlank(input).split(',');
    input = input.map(item => Number(item));
    return input;
  }
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
  static getProfitRate(amount, total) {
    if(total === 0) return 0;
    const decimalValue = (total / amount) * 100;
    const profitRate = decimalValue.toFixed(2);
    return profitRate;
  }
}

module.exports = GameUtils;