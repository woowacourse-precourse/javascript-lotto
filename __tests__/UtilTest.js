const {
  sortAscendingNumbers,
  getNumberIntersection,
  addMoneyComma,
  getProfitRate,
  roundingNumber,
} = require("../src/utils/utils");

describe("유틸 테스트", () => {
  test("숫자를 오름차순으로 정렬한다", () => {
    const numbers = [10, 9, 8, 5];
    const answers = [5, 8, 9, 10];

    answers.forEach((answer, index) => {
      expect(sortAscendingNumbers(numbers)[index]).toBe(answer);
    });
  });

  test("숫자 교집합 구하기", () => {
    const arr1 = [1, 2, 3, 5];
    const arr2 = [5, 8, 9, 10];

    expect(getNumberIntersection(arr1, arr2)).toContain(5);
  });

  test("천원 단위로 콤마찍기", () => {
    const moneys = [1000, 1999999];
    const addedMoneyCommas = ["1,000", "1,999,999"];

    moneys.forEach((money, index) => {
      const addedMoneyComma = addedMoneyCommas[index];
      expect(addMoneyComma(money)).toEqual(
        expect.stringContaining(addedMoneyComma)
      );
    });
  });

  test("수익률 구하기", () => {
    const purchaseAmouts = [1000, 1000, 1000, 1000, 4000];
    const totalRevenues = [1000, 0, 12000, 1200, 5000];

    const porfitRates = [100, 0, 1200, 120, 125];

    porfitRates.forEach((profitRate, index) => {
      const purchaseAmout = purchaseAmouts[index];
      const totalRevenue = totalRevenues[index];
      expect(getProfitRate(purchaseAmout, totalRevenue)).toBe(profitRate);
    });
  });

  test("소수점 한자리로 반올림하기", () => {
    expect(roundingNumber(1000.46)).toBe(1000.5);
    expect(roundingNumber(1000.4612111)).toBe(1000.5);
    expect(roundingNumber(1000.333333333)).toBe(1000.3);
  });
});
