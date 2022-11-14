const Lotto = require("../src/Lotto");
const LottoArray = require("../src/LottoArray");
const Stats = require("../src/Stats");

describe("통계 기능 검증", () => {
  test("맞춘 번호 개수 세기", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const stats = new Stats({ winningNumbers, bonusNumber, purchased: [] });
    const lottoArray = [
      new Lotto([41, 42, 43, 44, 32, 33]),
      new Lotto([11, 3, 32, 44, 15, 26]),
      new Lotto([11, 3, 6, 14, 25, 22]),
      new Lotto([1, 2, 3, 27, 35, 26]),
      new Lotto([4, 3, 1, 27, 35, 2]),
      new Lotto([5, 4, 6, 27, 2, 1]),
      new Lotto([5, 3, 1, 7, 2, 6]),
      new Lotto([6, 4, 3, 2, 5, 1]),
    ];

    const scoreArray = ["underThree", "underThree", "underThree", "three", "four", "five", "fivePlusBonus", "six"];

    lottoArray.forEach((lotto, index) => {
      const score = stats.getScore(lotto);
      expect(score).toBe(scoreArray[index]);
    });
  });
});
