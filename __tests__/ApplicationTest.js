const App = require("../src/App");
const Lotto = require("../src/Lotto");
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

describe("로또 테스트", () => {
  test("일반 기능을 테스트 한다.", () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(["8000", "1,2,3,4,5,6", "7"]);
    const logs = [
      "8개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[7, 11, 16, 35, 36, 44]",
      "[1, 8, 11, 31, 41, 42]",
      "[13, 14, 16, 38, 42, 45]",
      "[7, 11, 30, 40, 42, 43]",
      "[2, 13, 22, 32, 38, 45]",
      "[1, 3, 5, 14, 22, 45]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 62.5%입니다.",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("isValidMoney(), 입력 받은 금액이 숫자인지 확인한다.", () => {
    const moneys = ["1000j", 988, 1000001];
    mockQuestions(moneys);

    moneys.forEach((money) => {
      expect(() => {
        const app = new App();
        app.play();
      }).toThrow("[ERROR]");
    });
  });

  test("generateLottoNumber(), 입력받은 개수만큼 로또 번호를 생성한다.", () => {
    const lottonumbers = [
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7],
      [3, 4, 5, 6, 7, 8],
    ];
    const messages = [
      "3개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
      "[2, 3, 4, 5, 6, 7]",
      "[3, 4, 5, 6, 7, 8]",
    ];
    const logSpy = getLogSpy();
    mockRandoms(lottonumbers);

    const app = new App();
    app.generateLottoNumber(3);

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("showMyLotto(), myLotto 배열 속 객체들 출력 한다.", () => {
    const myLottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 14, 17, 30, 31]),
      new Lotto([1, 5, 13, 19, 22, 42]),
      new Lotto([5, 13, 16, 28, 29, 31]),
    ];
    const messages = [
      "4개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
      "[7, 8, 14, 17, 30, 31]",
      "[1, 5, 13, 19, 22, 42]",
      "[5, 13, 16, 28, 29, 31]",
    ];
    const logSpy = getLogSpy();

    const app = new App();
    app.showMyLotto(myLottos);

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("getWinningNums(), 1. 번호를 제대로 입력했을 때 winningLotto가 만들어진다.", () => {
    const answer = [1, 2, 3, 4, 5, 6, 7];
    mockQuestions(["1,2,3,4,5,6", "7"]);

    const app = new App();
    expect(app.getWinningNums()).toEqual(answer);
  });

  test("getWinningNums(), 2. 일반 번호 6자리가 형식을 벗어나면 예외를 발생한다.", () => {
    mockQuestions(["1,2,3,4,5", "7"]);

    expect(() => {
      const app = new App;
      app.getWinningNums();
    }).toThrow("[ERROR]");    
  });

  test("getWinningNums(), 3. 보너스 번호가 형식을 벗어나면 예외를 발생한다.", () => {
    const winningNums = [
      "1,2,3,4,5,6", "5",
      "1,2,3,4,5,6", "0",
      "1,2,3,4,5,6", "100"
    ]
    mockQuestions(winningNums);
    
    expect(() => {
      const app = new App;
      app.getWinningNums();
    }).toThrow("[ERROR]");    
  });

  test("calLottoProfit(), 당첨된 로또를 계산하고 등수 Object를 만들어 수익률을 보여준다.", () => {
    const myLotto = [
      new Lotto([21, 22, 23, 24, 25, 26]),
      new Lotto([31, 32, 33, 34, 35, 36]),
      new Lotto([11, 22, 33, 34, 35, 36])
    ];

    const messages = [
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 2개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 3333.3%입니다.",
    ];

    const logSpy = getLogSpy();
    const app = new App();
    app.calLottoProfit(myLotto,[1, 2, 33, 34, 35, 36, 7])

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    })
  })

  test("showProfitResult(), 등수 정보와 수익률을 보여준다.", () => {
    const winningInfo = {
      1: 0,
      2: 0,
      3: 1,
      4: 1,
      5: 1
    }
    const profit = 1555000;
    const principal = 600000;
    const messages = [
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 259.2%입니다.",
    ]
    const logSpy = getLogSpy();
    const app = new App;
    app.showProfitResult(winningInfo, profit, principal);

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    })
  })
});
