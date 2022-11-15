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

describe("로또 번호 입력 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    mockQuestions(["8000", "1,2,3,4,5,6,7", "8"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    mockQuestions(["8000", "2,2,3,4,5,6", "7"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 숫자가 아닌 문자가 있으면 예외가 발생한다.", () => {
    mockQuestions(["8000", "a,2,3,4,5,6", "7"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 정수가 아니면 예외가 발생한다.", () => {
    mockQuestions(["8000", "1.5,2,3,4,5,6", "7"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 음수가 있으면 예외가 발생한다.", () => {
    mockQuestions(["8000", "-1,2,3,4,5,6", "7"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 0이 있으면 예외가 발생한다.", () => {
    mockQuestions(["8000", "0,2,3,4,5,6", "7"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 범위를 벗어나면 예외가 발생한다.", () => {
    mockQuestions(["8000", "1,2,3,4,5,46", "7"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });
});
