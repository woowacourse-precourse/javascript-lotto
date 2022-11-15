const { LOTTO_BASIC_CONDITION, ROUNDING_DIGIT } = require('../constants');

class GameUtils {
  static removeMarkingStandardMoney(input) {
    let result = GameUtils.#removeBlank(input);
    result = GameUtils.#removeMarkingStandard(input);
    return result;
  }

  static toArray(input) {
    let result = GameUtils.#removeBlank(input).split(',');
    result = result.map(item => Number(item));
    return result;
  }

  static getSheets(amount) {
    const result = amount / LOTTO_BASIC_CONDITION.price;
    return result;
  }

  static getRevenueRate(amount, total) {
    if(total === 0) return 0;
    const decimalValue = (total / amount) * 100;
    const revenueRate = decimalValue.toFixed(ROUNDING_DIGIT);
    return revenueRate;
  }

  static addComma(value) {
    const convertedValue = [...value.toString()];
    let result = '';
    let digit = 0;
    for(let i = convertedValue.length - 1; i >= 0; i--) {
      if(digit === 3) {
        result = ',' + result;
        digit = 0;
      }
      result = convertedValue[i] + result;
      digit += 1;
    }
    return result;
  }

  static #removeMarkingStandard(value) {
    const regex = /[,'원']/g;
    const result = value.replace(regex, '');
    return result;
  }

  static #removeBlank(value) {
    const regex = /\s/g;
    const nonBlank = value.replace(regex, '');
    return nonBlank;
  }
}

module.exports = GameUtils;