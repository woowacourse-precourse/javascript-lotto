const {
  buyLottos,
  getStatistics,
  getRateOfReturn,
  getRevenue,
  getStatisticsTemplate,
} = require("../src/Core/App.util");

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

describe("getRevenue", () => {
  test("is calculate Revenue", () => {
    // given
    const input = [1, 0, 1, 1, 0];
    // when
    const expectResult = getRevenue(input);
    // then
    expect(expectResult).toBe(2001505000);
  });
});

describe("getStatisticsTemplate", () => {
  test("is calculate Revenue", () => {
    // given
    const input = [1, 0, 1, 1, 0];
    // when
    const expectResult = getStatisticsTemplate(input);
    // then
    expect(expectResult).toStrictEqual([
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 1개",
    ]);
  });
});
