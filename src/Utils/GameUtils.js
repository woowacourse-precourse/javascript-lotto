const { PRICE_PER_SHEET, ROUNDING_DIGIT } = require('../constants');

class GameUtils {
  static removeMarkingStandardMoney(input) {
    input = GameUtils.removeBlank(input);
    input = GameUtils.removeComma(input);
    return input;
  }
  static removeComma(value) {
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
  static getRevenueRate(amount, total) {
    if(total === 0) return 0;
    const decimalValue = (total / amount) * 100;
    const revenueRate = decimalValue.toFixed(ROUNDING_DIGIT);
    return revenueRate;
  }
  static addComma(value) {
    let addedComma = '';
    value = Array.from(value.toString());
    let digit = 0;
    for(let i = value.length - 1; i >= 0; i--) {
      if(digit === 3) {
        addedComma = ',' + addedComma;
        digit = 0;
      }
      addedComma = value[i] + addedComma;
      digit += 1;
    }
    return addedComma;
  }
}

module.exports = GameUtils;