const MissionUtils = require("@woowacourse/mission-utils");
const LottoAdmin = require("../src/LottoAdmin");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("로또 관리자 테스트", () => {
  test("한 개의 로또에 일치하는 로또 번호 개수를 알려준다.", () => {
    expect(
      LottoAdmin.getSameNumWithInputLotto(
        [1, 2, 3, 4, 5, 6],
        [3, 4, 5, 6, 7, 8]
      )
    ).toEqual(4);
  });
  test("당첨 통계를 알려준다.", () => {
    const logs = [
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 2개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 4개",
      "6개 일치 (2,000,000,000원) - 1개",
    ];
    const logSpy = getLogSpy();
    LottoAdmin.printWinStatistics([1, 2, 1, 4, 1]);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
