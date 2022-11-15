const { ERROR, LOTTO_SPEC } = require('../Constants');

class Validation {
  // Computer가 winningNumbers를 제대로 생성했는지 확인
  isValidWinningNumbers(numbers) {
    if (numbers.length !== LOTTO_SPEC.PROPER_LENGTH) {
      throw new Error(ERROR.LOTTO.LENGTH);
    }
    if (!this.isNotDuplicated(numbers)) {
      throw new Error(ERROR.LOTTO.DUPLICATED);
    }
    if (!this.isValidType(numbers)) {
      throw new Error(ERROR.LOTTO.TYPE);
    }
    if (!this.isValidRange(numbers)) {
      throw new Error(ERROR.LOTTO.RANGE);
    }
  }

  isNotDuplicated(numbers) {
    return new Set(numbers).size === LOTTO_SPEC.PROPER_LENGTH;
  }

  isValidType(numbers) {
    const typeRegex = /^[0-9]+$/;
    return typeRegex.test(numbers.join(''));
  }

  isValidRange(numbers) {
    return numbers.every(
      (num) => num >= LOTTO_SPEC.MIN_NUMBER && num <= LOTTO_SPEC.MAX_NUMBER,
    );
  }

  // User가 금액을 제대로 입력했는지 확인
  isValidUserMoney(userMoney) {
    if (!this.isValidMoneyType(userMoney)) {
      throw new Error(ERROR.USER.MONEY.TYPE);
    }
    if (!this.isValidMinRange(userMoney)) {
      throw new Error(ERROR.USER.MONEY.MIN_RANGE);
    }
    if (!this.isValidMaxRange(userMoney)) {
      throw new Error(ERROR.USER.MONEY.MAX_RANGE);
    }
    if (!this.isValidToDivide(userMoney)) {
      throw new Error(ERROR.USER.MONEY.DIVIDE);
    }
    return userMoney;
  }

  isValidMoneyType(userMoney) {
    const typeRegex = /^[0-9]+$/;
    return typeRegex.test(userMoney);
  }

  isValidMinRange(userMoney) {
    return Number(userMoney) >= LOTTO_SPEC.MIN_COST;
  }

  isValidMaxRange(userMoney) {
    return Number(userMoney) < Number.MAX_SAFE_INTEGER;
  }

  isValidToDivide(userMoney) {
    return Number(userMoney) % LOTTO_SPEC.MIN_COST === 0;
  }

  // User가 Lotto 번호를 제대로 입력했는지 확인
  isValidUserLottoNumber(userLottoNumber) {
    if (!this.isValidLottoType(userLottoNumber)) {
      throw new Error(ERROR.USER.LOTTONUMBER.TYPE);
    }
    if (!this.isNotSixNumber(userLottoNumber)) {
      throw new Error(ERROR.USER.LOTTONUMBER.LENGTH);
    }
    if (!this.isValidLottoRange(userLottoNumber)) {
      throw new Error(ERROR.USER.LOTTONUMBER.RANGE);
    }
    if (!this.isLottoNotDuplicated(userLottoNumber)) {
      throw new Error(ERROR.USER.LOTTONUMBER.DUPLICATED);
    }
    return userLottoNumber;
  }

  // User 가 보너스 번호를 제대로 입력했는지 확인
  isValidBonusNumber(userBonusNumber) {
    if (!this.isValidLottoType(userBonusNumber)) {
      throw new Error(ERROR.USER.BONUSNUMBER.TYPE);
    }
    if (!this.isValidLottoRange(userBonusNumber)) {
      throw new Error(ERROR.USER.BONUSNUMBER.RANGE);
    }
    return userBonusNumber;
  }

  isValidLottoType(userLottoNumber) {
    const typeRegex = /^[0-9]+$/;
    return typeRegex.test(userLottoNumber.replace(/,/g, ''));
  }

  isNotSixNumber(userLottoNumber) {
    return (
      userLottoNumber.split(',').filter((num) => num !== '').length ===
      LOTTO_SPEC.PROPER_LENGTH
    );
  }

  isValidLottoRange(userLottoNumber) {
    return userLottoNumber
      .split(',')
      .every(
        (num) => num >= LOTTO_SPEC.MIN_NUMBER && num <= LOTTO_SPEC.MAX_NUMBER,
      );
  }

  isLottoNotDuplicated(userLottoNumber) {
    return (
      new Set(userLottoNumber.split(',')).size === LOTTO_SPEC.PROPER_LENGTH
    );
  }
}

module.exports = Validation;
