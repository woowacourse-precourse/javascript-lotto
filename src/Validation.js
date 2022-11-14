const Validation = {
  isNumber: function (input) {
    return !isNaN(Number(input));
  },

  isVaildMoney: function (input, money) {
    return Number(input) % money === 0;
  },

  isValidRange: function (input, min, max) {
    let numArr = input.replace(' ', '').split(',');
    let errorCount = numArr.filter(num => num < min || num > max).length;
    return errorCount === 0;
  },

  isRightSizeAndNotDuplicated: function (input, num) {
    return new Set(input).size === num;
  },
};

module.exports = Validation;
