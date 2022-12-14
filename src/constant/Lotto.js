const LOTTO_PURCHASE = {
  UNIT: 1000,
  MIMIMUM: 1000,
  CHECK_VALIDATION: {
    VALIDATORNAME: ['isNumber', 'isNumberDivided', 'isNumberBigger'],
    VALIDATIONINFOMATION: {
      checkShare: 1000,
      checkMinimum: 1000,
    },
  },
};

module.exports = { LOTTO_PURCHASE };
