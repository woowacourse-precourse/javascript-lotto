const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("구입 금액 테스트", () => {
  test("구입 금액이 0원인 경우", () => {
    mockQuestions(["0"]);
    const logs = ["0개를 구매했습니다."];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("구입 금액이 음수인 경우", () => {
    mockQuestions(["-8000"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1,000원 단위가 아닌 경우", () => {
    mockQuestions(["800"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });
});
