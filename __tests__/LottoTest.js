const Lotto = require("../src/Lotto");
const Clerk = require("../src/Clerk");


describe("로또 클래스 테스트", () => {
  test("로또 비용 유효성 검사", () => {
    expect(() => {
      const clerk = new Clerk();
      clerk.checkMoney(130);
    }).toThrow();
  });

  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("당첨 내역 배열 확인", () => {
    const lotto = [1, 2, 3, 4, 5, 6];
    const userNums = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]
    const bonus = 7;
    const testFn = new Lotto(lotto).getWinningResult(bonus, userNums);
    expect(testFn).toEqual([1,0,0,0,0]);
  });

  test("당첨 내역 확인", () => {
    const testFn = new Lotto([1, 2, 3, 4, 5, 6]).makeWinningDetails([1,0,0,0,0]);
    const result = [
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
    ]
    expect(testFn).toEqual(result);
  });

  test("로또 당청금 확인", () => {
    const testFn = new Lotto([1, 2, 3, 4, 5, 6]).calculateProfit([1,0,0,0,0]);
    expect(testFn).toEqual(5000);
  });

  test("당첨 내역 배열위한 인덱스 찾기_2등(5개+보너스)", () => {
    const userNumArray = [1, 3, 5, 14, 22, 45];
    const matchCount = 3;
    const bonus = 7;
    const testFn = new Lotto([1, 2, 3, 4, 5, 6]).searchPlusIndex({ userNumArray, matchCount, bonus });
    expect(testFn).toEqual(0);
  });
  
});
