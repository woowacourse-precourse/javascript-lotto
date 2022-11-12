module.exports = {
  isOutOfRange(number) {
    return Number.isNaN(number) || number < 1 || number > 45;
  }
};
