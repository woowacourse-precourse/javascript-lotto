class Validator {
  static isRange(start, end, target) {
    return start <= target && target <= end;
  }
}

module.exports = Validator;
