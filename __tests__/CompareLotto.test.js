const CompareLotto = require("../src/CompareLotto");

describe("당첨 통계 계산 클래스 테스트", () => {
  test("1등 return 확인", () => {
    const correctCnt = 6;
    const correctBonus = false;
    const compareLotto = new CompareLotto();
    const rank = compareLotto.saveResult(correctCnt, correctBonus);

    expect(rank).toBe(1);
  });

  test("2등 return 확인", () => {
    const correctCnt = 5;
    const correctBonus = true;
    const compareLotto = new CompareLotto();
    const rank = compareLotto.saveResult(correctCnt, correctBonus);

    expect(rank).toBe(2);
  });

  test("3등 return 확인", () => {
    const correctCnt = 5;
    const correctBonus = false;
    const compareLotto = new CompareLotto();
    const rank = compareLotto.saveResult(correctCnt, correctBonus);

    expect(rank).toBe(3);
  });

  test("4등 return 확인", () => {
    const correctCnt = 4;
    const correctBonus = false;
    const compareLotto = new CompareLotto();
    const rank = compareLotto.saveResult(correctCnt, correctBonus);

    expect(rank).toBe(4);
  });

  test("5등 return 확인", () => {
    const correctCnt = 3;
    const correctBonus = false;
    const compareLotto = new CompareLotto();
    const rank = compareLotto.saveResult(correctCnt, correctBonus);

    expect(rank).toBe(5);
  });

  test("1등 개수 확인", () => {
    const userLotto = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ];
    const winNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 10;
    const rank = new CompareLotto(userLotto, winNumber, bonusNumber).compare();

    expect(rank[1]).toBe(2);
  });

  test("2등 개수 확인", () => {
    const userLotto = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ];
    const winNumber = [1, 2, 3, 4, 5, 7];
    const bonusNumber = 6;
    const rank = new CompareLotto(userLotto, winNumber, bonusNumber).compare();

    expect(rank[2]).toBe(2);
  });

  test("3등 개수 확인", () => {
    const userLotto = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ];
    const winNumber = [1, 2, 3, 4, 5, 7];
    const bonusNumber = 10;
    const rank = new CompareLotto(userLotto, winNumber, bonusNumber).compare();

    expect(rank[3]).toBe(2);
  });

  test("4등 개수 확인", () => {
    const userLotto = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ];
    const winNumber = [1, 2, 3, 4, 8, 9];
    const bonusNumber = 10;
    const rank = new CompareLotto(userLotto, winNumber, bonusNumber).compare();

    expect(rank[4]).toBe(2);
  });

  test("5등 개수 확인", () => {
    const userLotto = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ];
    const winNumber = [1, 2, 3, 7, 8, 9];
    const bonusNumber = 10;
    const rank = new CompareLotto(userLotto, winNumber, bonusNumber).compare();

    expect(rank[5]).toBe(2);
  });
});
