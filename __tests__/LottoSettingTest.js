const LottoSetting = require("../src/LottoSetting");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};
const lottoSetting = new LottoSetting();
describe("로또 당첨 세팅 테스트", () => {
  test("로또 입력 예외처리 테스트", () => {
    const logs = ["1,2,3,4", "1,2,3,4,5,5,3,4,"];
    logs.forEach((log) => {
      expect(() => {
        lottoSetting.winNumToLottoClass(log);
      }).toThrow("[ERROR]");
    });
  });

  test("보너스 번호 입력 예외 처리 테스트", () => {
    lottoSetting.winNumToLottoClass("1,2,3,4,5,6");
    const logs = ["1", "99", "1,2"];
    logs.forEach((log) => {
      expect(() => {
        lottoSetting.isBonusNum(log);
      }).toThrow("[ERROR]");
    });
  });
});
