const {
  LOTTO_BUY_ERROR,
  PRICE_PER_LOTTO,
  LOTTO_PICK_COUNT,
  LOTTO_HIT_NUMBER_INPUT_ERROR,
  LOTTO_BONUS_NUMBER_INPUT_ERROR,
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
} = require('./Const');
class Validation {
  static checkInputPrice(price) {
    if (price < 0) {
      throw new Error(LOTTO_BUY_ERROR.UNDER_ZERO_EXCEPTION);
    }

    if (isNaN(price)) {
      throw new Error(LOTTO_BUY_ERROR.NOT_A_NUMBER_EXCEPTION);
    }

    if (price % PRICE_PER_LOTTO !== 0) {
      throw new Error(LOTTO_BUY_ERROR.NOT_A_PRICE_UNIT_EXCEPTION);
    }

    return true;
  }

  static checkInputHitLottoNumber(hitLottoNumber) {
    const hitLottoNumberArray = hitLottoNumber.split(',').map(Number);

    if (hitLottoNumberArray.length !== LOTTO_PICK_COUNT) {
      throw new Error(LOTTO_HIT_NUMBER_INPUT_ERROR.NOT_A_LOTTO_PICK_COUNT_EXCEPTION);
    }

    let hitLottoNumberSet = new Set(hitLottoNumberArray);
    if (hitLottoNumberSet.size !== LOTTO_PICK_COUNT) {
      throw new Error(LOTTO_HIT_NUMBER_INPUT_ERROR.DUPLICATED_NUMBER_EXIST_EXCEPTION);
    }

    hitLottoNumberArray.forEach(number => {
      if (number < LOTTO_MIN_NUMBER || number > LOTTO_MAX_NUMBER) {
        throw new Error(LOTTO_HIT_NUMBER_INPUT_ERROR.NOT_IN_RANGE_EXCEPTION);
      }

      if (isNaN(number)) {
        throw new Error(LOTTO_HIT_NUMBER_INPUT_ERROR.NOT_A_NUMBER_EXCEPTION);
      }
    });

    return true;
  }

  static checkInputBonusNumber(hitLottoNumber, bonusNumber) {
    if (hitLottoNumber.includes(bonusNumber)) {
      throw new Error(LOTTO_BONUS_NUMBER_INPUT_ERROR.DUPLICATED_NUMBER_EXIST_EXCEPTION);
    }

    if (Number(bonusNumber) < LOTTO_MIN_NUMBER || Number(bonusNumber) > LOTTO_MAX_NUMBER) {
      throw new Error(LOTTO_BONUS_NUMBER_INPUT_ERROR.NOT_IN_RANGE_EXCEPTION);
    }

    if (isNaN(bonusNumber)) {
      throw new Error(LOTTO_BONUS_NUMBER_INPUT_ERROR.NOT_A_NUMBER_EXCEPTION);
    }

    return true;
  }
}

module.exports = Validation;
