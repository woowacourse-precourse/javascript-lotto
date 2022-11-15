const { LOTTO_PRICE } = require('../Constants/number');
const {
  ONLY_INPUT_NUMBER,
  LOTTO_PRICE_CEHCK,
  INPUT_PRICE,
  COMMA,
  LENGTH,
  RANGE,
  OVERLAP,
  DUPNUMER,
} = require('../Constants/message').ERROR_MESSAGE;

class validate {
  static OnlyInputNum(input) {
    if (isNaN(input)) throw new Error(ONLY_INPUT_NUMBER);
  }

  static LottoPriceCheck(input) {
    if (input % LOTTO_PRICE !== 0) throw new Error(LOTTO_PRICE_CEHCK);
    if (input === 0) throw new Error(INPUT_PRICE);
  }

  static Comma(input) {
    if (!input.includes(',')) throw new Error(COMMA);
  }

  static Length(input, length) {
    if (input.length !== length) throw new Error(LENGTH(length));
  }

  static Range(input, min, max) {
    if (input < min || input > max) throw new Error(RANGE(min, max));
  }

  static Overlap(input) {
    if (new Set(input).size !== input.length) throw new Error(OVERLAP);
  }

  static DupNumber(input, numbers) {
    if (numbers.includes(Number(input))) throw new Error(DUPNUMER);
  }

  static ArrOnlyInputNum(input) {
    input.forEach((num) => {
      this.OnlyInputNum(num);
    });
  }

  static ArrOverlap(input) {
    if (new Set(input).size !== input.length) throw new Error(OVERLAP);
  }

  static ArrRange(input, min, max) {
    input.forEach((num) => {
      this.Range(num, min, max);
    });
  }
}

module.exports = validate;
