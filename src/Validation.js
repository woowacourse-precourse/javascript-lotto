class Validation {
  amountType(value) {
    if (typeof value === "number") {
      return true;
    }
  }
  amountUnit(value) {
    if (value % 1000 === 0) {
      return true;
    }
  }

  // numbers

  type() {}
  range() {}
  lengthOne() {}
  lengthSix() {}
  duplication() {}
  formatArray() {}
  formatString() {}
}

module.exports = Validation;
