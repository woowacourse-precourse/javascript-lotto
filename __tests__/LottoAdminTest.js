const MissionUtils = require("@woowacourse/mission-utils");
const LottoAdmin = require("../src/LottoAdmin");
const { price } = require("../src/constants");

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
    const statistics = [1, 2, 1, 4, 1];
    const logs = [
      `3개 일치 (5,000원) - ${statistics[0]}개`,
      `4개 일치 (50,000원) - ${statistics[1]}개`,
      `5개 일치 (1,500,000원) - ${statistics[2]}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${statistics[3]}개`,
      `6개 일치 (2,000,000,000원) - ${statistics[4]}개`,
    ];
    const logSpy = getLogSpy();
    LottoAdmin.printWinStatistics(statistics);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("이익률을 계산한다.", () => {
    expect(LottoAdmin.getMargin(price, [4, [1, 1, 1, 1, 1]])).toEqual(50788875);
    expect(LottoAdmin.getMargin(price, [4, [1, 1, 0, 0, 0]])).toEqual(1375);
    expect(LottoAdmin.getMargin(price, [8, [3, 1, 0, 0, 0]])).toEqual(812.5);
    expect(LottoAdmin.getMargin(price, [12, [3, 1, 0, 0, 0]])).toEqual(541.67);
    expect(LottoAdmin.getMargin(price, [17, [3, 3, 0, 0, 0]])).toEqual(970.59);
  });
});
