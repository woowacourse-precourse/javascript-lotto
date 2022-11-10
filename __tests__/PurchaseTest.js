const Purchase = require("../src/Purchase");
const { ERROR_MESSAGES } = require("../src/constants");

describe("구매 클래스 테스트", () => {
  test("구매 금액은 1000원 이하 10000원 이상을 넘으면 오류를 반환한다.", () => {
    expect(() => {
      const costs = [0, 11000];

      costs.forEach((cost) =>
        expect(new Purchase(cost).isValidCost(cost)).toThrow(
          ERROR_MESSAGES.INVALID_COST_RANGE
        )
      );
    });
  });
  test("구매 금액이 1000원 단위가 아니면 오류를 반환한다.", () => {
    expect(() => {
      const costs = [500, 550, 555];

      costs.forEach((cost) =>
        expect(new Purchase(cost).isValidCost(cost)).toThrow(
          ERROR_MESSAGES.INVALID_COST_UNIT
        )
      );
    });
  });

  test("구매 금액에 맞게 구매 로또양을 적절히 반환한다.", () => {
    const costs = [1000, 8000, 10000];
    const amountOfLotto = [1, 8, 10];

    for (let i = 0; i < costs.length; i++) {
      expect(new Purchase(costs[i]).purchaseLotto(costs[i])).toBe(
        amountOfLotto[i]
      );
    }
  });
});
