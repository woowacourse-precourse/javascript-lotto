const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
});

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

describe("[기능2] 금액 입력 예외 처리", () => {
  test("[2-1] 1000원 이하로 입력하면 예외가 발생한다.", () => {
    mockQuestions(["900"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });
  test("[2-2] 숫자 외 문자를 입력하면 예외가 발생한다.", () => {
    mockQuestions(["300a0"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });
  test("[2-3] 1000원 단위가 아니면 예외가 발생한다.", () => {
    mockQuestions(["2400"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });
});

describe("[기능4] 랜덤 번호 뽑기 테스트", () => {
  test("3000원 입력 시 3번 랜덤 번호 뽑기", () => {
    const logSpyRandom = jest.spyOn(MissionUtils.Random, "pickUniqueNumbersInRange");

    mockQuestions(["3000"]);

    const app = new App();
    app.play();

    expect(logSpyRandom).toBeCalledTimes(3);
  });
});

describe("[기능6] 당첨 번호 입력 예외 처리", () => {
  test("[6-1] 6자리가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4]);
    }).toThrow("[ERROR]");
  });
  test("[6-2] 숫자 외 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "a"]);
    }).toThrow("[ERROR]");
  });
  test("[6-3] 숫자가 1~45 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 67]);
    }).toThrow("[ERROR]");
  });
  test("[6-4] 중복 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 1, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});

describe("[기능8] 보너스 번호 입력 예외 처리", () => {
  test("[8-1] 1자리가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]).checkWinBonusNumber([[1, 2], 1]);
    }).toThrow("[ERROR]");
  });
  test("[8-2] 숫자 외 문자면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]).checkWinBonusNumber(["a", 1]);
    }).toThrow("[ERROR]");
  });
  test("[8-3] 1~45 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]).checkWinBonusNumber(["57", 1]);
    }).toThrow("[ERROR]");
  });
  test("[8-4] 보너스 번호가 당첨 번호와 중복이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]).checkWinBonusNumber(["1", 1]);
    }).toThrow("[ERROR]");
  });
});

describe("[기능10] 당첨 통계 출력", () => {
  test("당첨 통계 출력", () => {
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 8, 9],
      [11, 12, 13, 14, 15, 16],
    ]);
    mockQuestions(["4000", "1,2,3,4,5,6", "7"]);
    const logs = [
      "4개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
      "[1, 2, 3, 4, 5, 7]",
      "[1, 2, 3, 4, 8, 9]",
      "[11, 12, 13, 14, 15, 16]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 1개",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

describe("[기능12] 수익률 출력", () => {
  test("수익률 출력", () => {
    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions(["1000", "1,2,3,7,8,9", "10"]);
    const logs = [
      "1개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 500%입니다.",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
