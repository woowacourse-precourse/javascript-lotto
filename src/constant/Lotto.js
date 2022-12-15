const Validation = require('../model/Validation');

const LOTTO_PURCHASE = {
  UNIT: 1000,
  MIMIMUM: 1000,
  CHECK_VALIDATION(AMOUNt) {
    new Validation(AMOUNt)
      .getStringValidator()
      .isNumber()
      .isNumberDivided(this.UNIT)
      .isNumberBigger(this.MIMIMUM)
      .getMessages();
  },
};

const LOTTO_NUMBER = {
  DIVISION: ',',
  LENGTH: 6,
  CHECK_VALIDATION: {
    VALIDATORNAME: ['isArrayElementType', 'isLength', 'isRepeated', 'isNumberRange'],
    VALIDATIONINFOMATION: {
      checkDivision: {
        isSplit: ',',
        isNumber: 'isNumber',
        isLength: 6,
        isRepeated: 6,
        isNumberRange: [1, 45],
      },
    },
  },
};

module.exports = { LOTTO_PURCHASE, LOTTO_NUMBER };
