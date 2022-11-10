const Result = require("../src/Result");

describe("결과 테스트", () => {
  test("하나의 복권에 대한 점수 산정", () => {
    const result = new Result([[7, 13, 19, 22, 31, 45]], [1, 2, 3, 4, 5, 6], 7);

    result.calculateOneLotto(result.lottoArray[0]);

    expect(result.score).toBe(0);
    expect(result.matchBonus).toBe(true);
  });
});
