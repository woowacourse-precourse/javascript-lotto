const Ranks = require("../src/controller/Ranks");

describe("순위계산 클래스 테스트", () => {
  test("로또 vs 당첨 번호 비교", () => {
      const ranks = new Ranks({win_numbers:[2,3,4,5,11,12]});
      const result = ranks.matchCheck([1,2,3,4,5,6])

      expect(result).toEqual(4)
    });

  test("몇 등인지 반환", () => {
    const ranks = new Ranks({win_numbers:[2,3,4,5,11,12], bonus_number:15});
    const result = ranks.makeRank([2,3,4,5,11,15]);

    expect(result).toEqual(3)
  });
});