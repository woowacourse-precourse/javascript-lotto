const Money = require("../src/Money");

describe("Money 클래스 테스트", () => {
  test("getTotalPrize() 메서드는 총 당첨 금액을 반환해야 한다.", () => {
    const input = {
      first: 1,
      second: 2,
      third: 3,
      fourth: 4,
      fifth: 5,
    };
    const totalPrize = (
      input.first * Money.FIRST_PRIZE
      + input.second * Money.SECOND_PRIZE
      + input.third * Money.THIRD_PRIZE
      + input.fourth * Money.FOURTH_PRIZE
      + input.fifth * Money.FIFTH_PRIZE
    );
    const result = Money.getTotalPrize(input);

    expect(result).toEqual(totalPrize);
  });
});
