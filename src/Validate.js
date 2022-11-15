const Lotto = require("./Lotto");
const { CONDITION, ERR_MESSAGE } = require("./constant/constant");

class validate {
  check(number) {
    this.checkLength(number);
    this.checkNumber(number);
    this.checkDuplication(number);
    this.checkRange(number);
  }

  bonusCheck(bonusNumber) {
    this.checkNumber(bonusNumber);
    this.checkRange(bonusNumber);
  }

  checkNumber(number) {
    for (let i = 0; i < number.length; i++) {
      const check = /\d/;

      if (!check.test(number[i])) {
        throw new Error(ERR_MESSAGE.ERR_LOTTO_INCLUDE_STRING);
      }
    }
  }

  checkLength(number) {
    this.lotto = new Lotto(number);
  }

  checkDuplication(number) {
    const set = new Set(number);
    if (set.size !== 6) {
      throw new Error(ERR_MESSAGE.ERR_LOTTO_OVERLAP_VALUE);
    }
  }

  checkRange(number) {
    for (let i = 0; i < number.length; i++) {
      const check = /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/;
      if (!check.test(number[i])) {
        // throw new Error(ERR_MESSAGE.ERR_LOTTO_VALID_VALUE);
      }
    }
  }

  checkIncludeBonus(number, bonus) {
    for (let i = 0; i < number.length; i++) {
      if (number[i].includes(String(bonus))) {
        throw new Error(ERR_MESSAGE.ERR_LOTTO_CHECK_INCLUDE_BONUS);
      }
    }
  }
}
module.exports = validate;
