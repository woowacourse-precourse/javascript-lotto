const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("함수별 기능 테스트", () => {
  test("구매한 로또 개수 출력", () => {
    const logSpy = getLogSpy();
    const log = "8개를 구매했습니다.";
    const money = 8000;

    const app = new App();
    app.printLotto(money);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
});