class Validator {
  checkPurchaseAmount(input, lottoPrice) {
    input = Number(input);
    if (!this.isNumber(input)) return -1;
    if (input % lottoPrice === 0) {
      return input / lottoPrice;
    }
    return -1;
  }
  isNumber = (number) => {
    return !Number.isNaN(number) && typeof number === "number";
  };
}

module.exports = Validator;
