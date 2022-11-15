const MissionUtils = require("@woowacourse/mission-utils");
const User = require("../src/User");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("유저 클래스 테스트", () => {
  test("구입 문구 출력 테스트", () => {
    const message = "금액";
    const logSpy = jest.spyOn(MissionUtils.Console, "readLine");

    const user = new User();
    user.readAmount(message, (amount) => {});

    expect(logSpy).toHaveBeenCalledWith("금액", expect.anything());
  });

  test("구입 금액이 숫자가 아니면 예외가 발생한다", () => {
    mockQuestions(["1000j"]);

    expect(() => {
      const user = new User();
      user.readAmount("금액", (amount) => {});
    }).toThrow();
  });

  test("구입 금액이 천원 단위가 아니면 예외가 발생한다", () => {
    mockQuestions(["1200"]);

    expect(() => {
      const user = new User();
      user.readAmount("금액", (amount) => {});
    }).toThrow();
  });

  test("당첨 번호 입력 문구 출력 테스트", () => {
    const message = "당첨 번호";
    const logSpy = jest.spyOn(MissionUtils.Console, "readLine");

    const user = new User();
    user.readWinNumbers(message, (winNumbers) => {});

    expect(logSpy).toHaveBeenCalledWith("당첨 번호", expect.anything());
  });

  test("당첨 번호가 올바른 형식이 아니면 예외가 발생한다", () => {
    mockQuestions(["1 2 3 4 5 6"]);

    expect(() => {
      const user = new User();
      user.readWinNumbers("당첨 번호", (amount) => {});
    }).toThrow("[ERROR]");
  });

  test("당첨 번호가 6개가 아니면 예외가 발생한다", () => {
    mockQuestions(["1,2,3,4,5"]);

    expect(() => {
      const user = new User();
      user.readWinNumbers("당첨 번호", (amount) => {});
    }).toThrow("[ERROR]");
  });

  test("당첨 번호가 중복되었다면 예외가 발생한다", () => {
    mockQuestions(["1,1,2,3,4,5"]);

    expect(() => {
      const user = new User();
      user.readWinNumbers("당첨 번호", (amount) => {});
    }).toThrow("[ERROR]");
  });

  test("당첨 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다", () => {
    mockQuestions(["1,2,3,4,5,99"]);

    expect(() => {
      const user = new User();
      user.readWinNumbers("당첨 번호", (amount) => {});
    }).toThrow("[ERROR]");
  });
});
