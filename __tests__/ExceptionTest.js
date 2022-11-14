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

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("[ 예외 테스트 ]", () => {
  test("예외 테스트 1 : 구매금액에 영문 오타가 있을 때", () => {
    mockQuestions(["1000j"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR] 구입 금액은 숫자여야 합니다.");
  });

  test("예외 테스트 2 : 구매금액이 1000원 단위가 아닐 때", () => {
    mockQuestions(["15400"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR] 구입 금액을 1,000원 단위로 입력해주세요.");
  });

  test("예외 테스트 3 : 당첨 번호가 숫자가 아닐 때", () => {
    mockQuestions(["3000", "1,2,3,4,5,n", "44"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR] 로또 번호는 숫자여야 합니다.");
  });

  test("예외 테스트 4 : 당첨 번호가 6자리가 아닐 때", () => {
    mockQuestions(["3000", "1,2,3,4,5,6,7", "44"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR] 로또 번호는 6자리여야 합니다.");
  });

  test("예외 테스트 5 : 당첨 번호가 1~45 사이의 숫자가 아닐 때", () => {
    mockQuestions(["3000", "1,2,3,4,5,50", "44"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  });

  test("예외 테스트 6 : 보너스 번호가 1~45 사이의 숫자가 아닐 때", () => {
    mockQuestions(["3000", "1,2,3,4,5,50", "44"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  });

  test("예외 테스트 7 : 당첨 번호가 중복될 때", () => {
    mockQuestions(["3000", "1,2,3,4,6,6", "44"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
  });

  test("예외 테스트 8 : 발급된 로또의 숫자가 6개가 아닐 때", () => {
    mockRandoms([
      [5, 9, 10, 15, 23, 40, 41],
      [3, 4, 9, 32, 35, 42],
      [13, 14, 19, 20, 21, 29],
    ]);
    mockQuestions(["3000", "7,9,11,16,30,39", "41"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR] 로또 번호는 6자리여야 합니다.");
  });

  test("예외 테스트 9 : 발급된 로또의 숫자가 중복될 때", () => {
    mockRandoms([
      [5, 9, 10, 15, 15, 41],
      [3, 4, 9, 32, 35, 42],
      [13, 14, 19, 20, 21, 29],
    ]);
    mockQuestions(["3000", "7,9,11,16,30,39", "41"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
  });

  test("예외 테스트 10 : 발급된 로또가 하나라도 숫자가 아닐 때", () => {
    mockRandoms([
      [5, 9, 10, 15, "n", 41],
      [3, 4, 9, 32, 35, 42],
      [13, 14, 19, 20, 21, 29],
    ]);
    mockQuestions(["3000", "7,9,11,16,30,39", "41"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR] 로또 번호는 숫자여야 합니다.");
  });
});
