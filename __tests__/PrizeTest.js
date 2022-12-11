const Prize = require("../src/domain/result/Prize");

describe("Prize 클래스 테스트", () => {
  test("일치하는 개수에 따라 당첨 결과 생성", () => {
    expect(Prize.getPrize(6)).toEqual(Prize.FIRST);
    expect(Prize.getPrize(5, true)).toEqual(Prize.SECOND);
    expect(Prize.getPrize(5, false)).toEqual(Prize.THIRD);
    expect(Prize.getPrize(4)).toEqual(Prize.FOURTH);
    expect(Prize.getPrize(3)).toEqual(Prize.FIFTH);
  });
});