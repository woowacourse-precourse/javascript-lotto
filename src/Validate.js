const validate = {
  validateCommon(input) {
    if (typeof +input !== 'number' || Number.isNaN(input)) return false;
    if (Math.sign(+input) === -1 || !Number.isInteger(+input)) return false;
    if (input === '') return false;
    return true;
  },

  validateUnit(input) {
    if (input % 1000 !== 0) return false;
    return true;
  },
};

console.log(validate.validateUnit(2020));
