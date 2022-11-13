class Money {
  constructor() {}

  static UNIT = 1000;

  static FIRST_PRIZE = 2000000000;
  static SECOND_PRIZE = 30000000;
  static THIRD_PRIZE = 1500000;
  static FOURTH_PRIZE = 50000;
  static FIFTH_PRIZE = 5000;

  static getTotalPrize(result) {
    const totalPrize = (
      result.first * Money.FIRST_PRIZE
      + result.second * Money.SECOND_PRIZE
      + result.third * Money.THIRD_PRIZE
      + result.fourth * Money.FOURTH_PRIZE
      + result.fifth * Money.FIFTH_PRIZE
    );
    return totalPrize;
  }
}

module.exports = Money;
