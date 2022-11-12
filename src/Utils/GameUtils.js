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