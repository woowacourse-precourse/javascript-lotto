const MissionUtils = require("@woowacourse/mission-utils");
const User = require("../src/User");
const Lotto = require("../src/Lotto");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("유저 클래스 테스트", () => {
  test("구입 금액이 숫자가 아니면 예외가 발생한다", () => {
    mockQuestions(["1000j"]);

    expect(() => {
      const user = new User();
      user.readAmount("금액", (amount) => {});
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 천원 단위가 아니면 예외가 발생한다", () => {
    mockQuestions(["1200"]);

    expect(() => {
      const user = new User();
      user.readAmount("금액", (amount) => {});
    }).toThrow("[ERROR]");
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

  test("보너스 번호가 숫자가 아니면 예외가 발생한다", () => {
    mockQuestions(["error"]);

    expect(() => {
      const user = new User();
      user.readBonusNumber("보너스 번호", (bonusNumber) => {});
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다", () => {
    mockQuestions(["100"]);

    expect(() => {
      const user = new User();
      user.readBonusNumber("보너스 번호", (bonusNumber) => {});
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호와 중복되었다면 예외가 발생한다", () => {
    Lotto.prototype.winNumbers = [1, 2, 3, 4, 5, 6];
    mockQuestions(["6"]);

    expect(() => {
      const user = new User();
      user.readBonusNumber("보너스 번호", (bonusNumber) => {});
    }).toThrow("[ERROR]");
  });
});
