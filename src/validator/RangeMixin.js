const RangeMixin = (superclass) =>
  class extends superclass {
    static isValidRange(input) {
      const validity = [...input].every(
        (number) => number >= 1 && number <= 45
      );

      if (!validity) {
        throw new Error(ERROR_MESSAGE.RANGE);
      }
    }
  };

module.exports = RangeMixin;
