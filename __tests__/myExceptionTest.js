const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");
const {
  validateBonus,
  validateMoney,
  validateWinningNumber
} = require('../src/functionValidation')

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

describe("로또 테스트", () => {
  // test("발행한 로또 수량에 따라 번호 생성 테스트", () => {
  //   mockRandoms([
  //     [8, 21, 23, 41, 42, 43],
  //     [3, 5, 11, 16, 32, 38],
  //     [7, 11, 16, 35, 36, 44],
  //     [1, 8, 11, 31, 41, 42],
  //     [13, 14, 16, 38, 42, 45],
  //     [7, 11, 30, 40, 42, 43],
  //     [2, 13, 22, 32, 38, 45],
  //     [1, 3, 5, 14, 22, 45],
  //   ]);
  //   mockQuestions(["8000"]);
  //   const logs = [
  //     "[8, 21, 23, 41, 42, 43]",
  //     "[3, 5, 11, 16, 32, 38]",
  //     "[7, 11, 16, 35, 36, 44]",
  //     "[1, 8, 11, 31, 41, 42]",
  //     "[13, 14, 16, 38, 42, 45]",
  //     "[7, 11, 30, 40, 42, 43]",
  //     "[2, 13, 22, 32, 38, 45]",
  //     "[1, 3, 5, 14, 22, 45]",
  //   ];
  //   const logSpy = getLogSpy();
  //   const app = new App();
  //   app.play();
  //   logs.forEach((log) => {
  //     expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  //   });
  // });

  // test("발행한 로또 개수 테스트", () => {
  //   mockQuestions(["8000"]);
  //   const logs = [
  //     "8개를 구매했습니다."
  //   ];
  //   const logSpy = getLogSpy();
  //   const app = new App();
  //   app.play();
  //   logs.forEach((log) => {
  //     expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  //   });
  // });

  // test("당첨 통계 개수까지 테스트", () => {
  //   mockRandoms([
  //     [8, 21, 23, 41, 42, 43],
  //     [3, 5, 11, 16, 32, 38],
  //     [7, 11, 16, 35, 36, 44],
  //     [1, 8, 11, 31, 41, 42],
  //     [13, 14, 16, 38, 42, 45],
  //     [7, 11, 30, 40, 42, 43],
  //     [2, 13, 22, 32, 38, 45],
  //     [1, 3, 5, 14, 22, 45],
  //   ]);
  //   mockQuestions(["8000", "1,2,3,4,5,6", "7"]);
  //   const logs = [
  //     "8개를 구매했습니다.",
  //     "[8, 21, 23, 41, 42, 43]",
  //     "[3, 5, 11, 16, 32, 38]",
  //     "[7, 11, 16, 35, 36, 44]",
  //     "[1, 8, 11, 31, 41, 42]",
  //     "[13, 14, 16, 38, 42, 45]",
  //     "[7, 11, 30, 40, 42, 43]",
  //     "[2, 13, 22, 32, 38, 45]",
  //     "[1, 3, 5, 14, 22, 45]",
  //     "3개 일치 (5,000원) - 1개",
  //     "4개 일치 (50,000원) - 0개",
  //     "5개 일치 (1,500,000원) - 0개",
  //     "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
  //     "6개 일치 (2,000,000,000원) - 0개",
  //   ];
  //   const logSpy = getLogSpy();
  //   const app = new App();
  //   app.play();
  //   logs.forEach((log) => {
  //     expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  //   });
  // });

  // 로또 번호 예외 처리 테스트 코드
  test("로또 번호가 1~45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([3, 6, 9, 93, 5, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호 중 숫자가 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([3, 6, 9, "j", 5, 7]);
    }).toThrow("[ERROR]");
  });

  // 돈 입력 예외 처리 테스트 코드
  test("돈이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      validateMoney(1250);
    }).toThrow("[ERROR]");
  });

  test("돈의 입력이 숫자가 아니면 예외가 발생한다.(1)", () => {
    expect(() => {
      validateMoney("124");
    }).toThrow("[ERROR]");
  });

  test("돈의 입력이 숫자가 아니면 예외가 발생한다.(2)", () => {
    expect(() => {
      validateMoney("asdifha");
    }).toThrow("[ERROR]");
  });

  test("돈의 입력이 1000원보다 적으면 예외가 발생한다.(1)", () => {
    expect(() => {
      validateMoney(0);
    }).toThrow("[ERROR]");
  });

  test("돈의 입력이 1000원보다 적으면 예외가 발생한다.(2)", () => {
    expect(() => {
      validateMoney(-300);
    }).toThrow("[ERROR]");
  });

  test("돈의 입력이 1000원보다 적으면 예외가 발생한다.(2)", () => {
    expect(() => {
      validateMoney(900);
    }).toThrow("[ERROR]");
  });

  // 당첨 번호와 보너스 번호 예외 처리 테스트 코드

  test("당첨 번호 범위가 1~45 사이의 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      validateWinningNumber("1,2,3,93,5,6");
    }).toThrow("[ERROR]");
  });

  test("당첨 번호 중 중복 되는 값 있을 경우 예외가 발생한다.", () => {
    expect(() => {
      validateWinningNumber("3,6,9,5,9,2");
    }).toThrow("[ERROR]");
  });

  test("당첨 번호 중 숫자가 아닌 값이 있을 경우 예외가 발생한다.", () => {
    expect(() => {
      validateWinningNumber("3,6,i,5,9,2");
    }).toThrow("[ERROR]");
  });

  test("당첨 번호의 길이가 6개와 다르면 예외가 발생한다.", () => {
    expect(() => {
      validateWinningNumber("3,6,5,9,2");
    }).toThrow("[ERROR]");
  });

  test("당첨 번호의 길이가 6개와 다르면 예외가 발생한다.", () => {
    expect(() => {
      validateWinningNumber("3,6,5.4,9,2");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 발행된 번호들과 중복될 경우 예외가 발생한다.", () => {
    expect(() => {
      validateBonus([3,6,9,2,4,5], 3);
    }).toThrow("[ERROR]");
  });
});
