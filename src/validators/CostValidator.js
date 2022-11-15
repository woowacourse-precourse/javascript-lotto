const { LOTTO, ERROR_MESSAGE } = require('../constants');
const { ValidationError } = require('../errors');

class CostValidator {
  static validatePurchaseCost(cost) {
    const validations = {
      TYPE: CostValidator.#isNumber,
      MIN: CostValidator.#isGreaterThanOrEqualLottoPrice,
      MAX: CostValidator.#isLessThanOrEqualMaxSafeInteger,
      UNIT: CostValidator.#isDividedByLottoPrice,
    };

    Object.entries(validations).forEach(([key, validateFunc]) => {
      CostValidator.#validate(cost, validateFunc, ERROR_MESSAGE.COST[key]);
    });
  }

  static #validate(cost, validateFunc, errorMessage) {
    if (!validateFunc(cost)) {
      throw new ValidationError(errorMessage);
    }
  }

  static #isNumber(value) {
    return typeof value === 'number';
  }

  static #isGreaterThanOrEqualLottoPrice(cost) {
    return cost >= LOTTO.PRICE;
  }

  static #isLessThanOrEqualMaxSafeInteger(cost) {
    return cost <= Number.MAX_SAFE_INTEGER;
  }

  static #isDividedByLottoPrice(cost) {
    return cost % LOTTO.PRICE === 0;
  }
}

module.exports = CostValidator;
