const validate = {
  validateCommon(input) {
    if (typeof +input !== 'number' || Number.isNaN(input)) return false;
    return true;
  },
};

console.log(validate.validateCommon(NaN));
