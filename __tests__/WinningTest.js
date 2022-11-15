const Buy = require("../src/Buy");
const MissionUtils = require("@woowacourse/mission-utils");

describe("로또 당첨 기능", () => {
  let buy;
  beforeEach(() => {
    buy = new Buy();
  });

  const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
  };

  test("당첨 번호와 로또 번호 비교 테스트", () => {
    buy.lottoNumber = [
      [1, 2, 3, 4, 5, 6],
      [5, 7, 8, 10, 12, 13],
      [7, 12, 15, 16, 19, 20],
      [1, 7, 10, 12, 16, 21],
      [1, 7, 10, 12, 16, 20],
      [1, 7, 10, 12, 16, 19],
    ];
    buy.winningNumber = [1, 7, 10, 12, 16, 19];
    const count = [
      [1, 0],
      [3, 0],
      [4, 1],
      [5, 0],
      [5, 1],
      [6, 0],
    ];
    for (let i = 0; i < count.length; i++) {
      expect(
        buy.rankCount(buy.lottoNumber[i], buy.winningNumber, 20)
      ).toStrictEqual(count[i]);
    }
  });
});
