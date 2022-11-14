const {
  buyLottos,
  getStatistics,
  getRateOfReturn,
} = require("../src/Util/App.util");

describe("buyLottos", () => {
  test("is make Lotto Object that length is input length", () => {
    // given
    const lottoLength = 4;
    // when
    const expectResult = buyLottos(lottoLength);
    // then
    expect(expectResult.length).toBe(lottoLength);
  });
});

describe("getStatistics", () => {
  test("is make winning statistics", () => {
    // given
    const input = [3, 4, 5, 6, 7];
    // when
    const expectResult = getStatistics(input);
    // then
    expect(expectResult).toEqual([1, 1, 1, 1, 1]);
  });
});

describe("getRateOfReturn", () => {
  test("is calculate rate of return", () => {
    // given
    const cost = 8000;
    const revenue = 55000;
    // when
    const expectResult = getRateOfReturn(cost, revenue);
    // then
    expect(expectResult).toBe("687.5");
  });
});
