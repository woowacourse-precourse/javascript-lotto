const Validate = {
  isNotMultipleOf1000(answer) {
    if (answer % 1000 !== 0) return true;
    return false;
  },

  existDuplicateNumber(numbers) {
    const set = new Set(numbers);
    if (numbers.length !== set.size) return true;
    return false;
  },

  existNumberOutOfRange(numbers, from, to) {
    if (numbers.find((number) => number < from || number > to) !== undefined)
      return true;
    return false;
  },

  existIsNotNumberAndComma(answer) {
    const exceptNumberAndComma = /[^0-9|^,]/;
    if (exceptNumberAndComma.test(answer)) return true;
    return false;
  },

  existIsNotNumber(answer) {
    const exceptNumber = /[^0-9]/;
    if (exceptNumber.test(answer)) return true;
    return false;
  },
};

module.exports = Validate;
