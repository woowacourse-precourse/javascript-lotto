const Prize = require("../src/Prize");

describe("Prize 클래스 테스트 - statValue", () => {
  test("1등 로또가 당첨된 경우 statValue", () => {
    const prizeInstace = new Prize(
      [
        [2, 14, 15, 17, 33, 39],
        [2, 8, 22, 26, 28, 31],
        [2, 20, 30, 32, 35, 41],
      ],
      [2, 14, 15, 17, 33, 39],
      1
    );
    expect(prizeInstace.statValue).toStrictEqual([0, 0, 0, 0, 1]);
  });

  test("2등 로또가 당첨된 경우 statValue", () => {
    const prizeInstace = new Prize(
      [
        [2, 14, 15, 17, 33, 39],
        [2, 8, 22, 26, 28, 31],
        [2, 20, 30, 32, 35, 41],
      ],
      [2, 14, 15, 17, 33, 40],
      39
    );
    expect(prizeInstace.statValue).toStrictEqual([0, 0, 0, 1, 0]);
  });

  test("3등 로또가 당첨된 경우 statValue", () => {
    const prizeInstace = new Prize(
      [
        [2, 14, 15, 17, 33, 39],
        [2, 8, 22, 26, 28, 31],
        [2, 20, 30, 32, 35, 41],
      ],
      [2, 14, 15, 17, 33, 40],
      1
    );
    expect(prizeInstace.statValue).toStrictEqual([0, 0, 1, 0, 0]);
  });

  test("4등 로또가 당첨된 경우 statValue", () => {
    const prizeInstace = new Prize(
      [
        [2, 14, 15, 17, 33, 39],
        [2, 8, 22, 26, 28, 31],
        [2, 20, 30, 32, 35, 41],
      ],
      [2, 14, 15, 17, 34, 40],
      1
    );
    expect(prizeInstace.statValue).toStrictEqual([0, 1, 0, 0, 0]);
  });

  test("5등 로또가 당첨된 경우 statValue", () => {
    const prizeInstace = new Prize(
      [
        [2, 14, 15, 17, 33, 39],
        [2, 8, 22, 26, 28, 31],
        [2, 20, 30, 32, 35, 41],
      ],
      [2, 14, 15, 18, 34, 40],
      1
    );
    expect(prizeInstace.statValue).toStrictEqual([1, 0, 0, 0, 0]);
  });
});

describe("Prize 클래스 테스트 - totalPrize", () => {
  test("1등 로또가 당첨된 경우 totalPrize", () => {
    const prizeInstace = new Prize(
      [
        [2, 14, 15, 17, 33, 39],
        [2, 8, 22, 26, 28, 31],
        [2, 20, 30, 32, 35, 41],
      ],
      [2, 14, 15, 17, 33, 39],
      1
    );
    expect(prizeInstace.totalPrize).toBe(2000000000);
  });

  test("2등 로또가 당첨된 경우 totalPrize", () => {
    const prizeInstace = new Prize(
      [
        [2, 14, 15, 17, 33, 39],
        [2, 8, 22, 26, 28, 31],
        [2, 20, 30, 32, 35, 41],
      ],
      [2, 14, 15, 17, 33, 40],
      39
    );
    expect(prizeInstace.totalPrize).toBe(30000000);
  });

  test("3등 로또가 당첨된 경우 totalPrize", () => {
    const prizeInstace = new Prize(
      [
        [2, 14, 15, 17, 33, 39],
        [2, 8, 22, 26, 28, 31],
        [2, 20, 30, 32, 35, 41],
      ],
      [2, 14, 15, 17, 33, 40],
      1
    );
    expect(prizeInstace.totalPrize).toBe(1500000);
  });

  test("4등 로또가 당첨된 경우 totalPrize", () => {
    const prizeInstace = new Prize(
      [
        [2, 14, 15, 17, 33, 39],
        [2, 8, 22, 26, 28, 31],
        [2, 20, 30, 32, 35, 41],
      ],
      [2, 14, 15, 17, 34, 40],
      1
    );
    expect(prizeInstace.totalPrize).toBe(50000);
  });

  test("5등 로또가 당첨된 경우 totalPrize", () => {
    const prizeInstace = new Prize(
      [
        [2, 14, 15, 17, 33, 39],
        [2, 8, 22, 26, 28, 31],
        [2, 20, 30, 32, 35, 41],
      ],
      [2, 14, 15, 18, 34, 40],
      1
    );
    expect(prizeInstace.totalPrize).toBe(5000);
  });
});
