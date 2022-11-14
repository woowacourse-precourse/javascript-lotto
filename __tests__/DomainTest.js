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

describe("도메인 로직 단위 테스트", () => {
  test("isValidMoney(), 금액을 확인하고 입력 금액이 올바르지 않다면 예외를 발생한다.", () => {
    const moneys = [12345, "1000j", 988, 1000001];
    mockQuestions(moneys);

    moneys.forEach((money) => {
      expect(() => {
        const app = new App();
        app.play();
      }).toThrow("[ERROR]");
    });
  });

  test("generateLottoNumber() 단위 테스트, 랜덤으로 로또 번호를 생성한다.", () => {
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

  test("validWinningNums() 단위 테스트, 당첨 번호의 유효성을 확인한다. -> 6자리 미만의 경우", () => {
    mockQuestions(["1,2,3,4,5", "7"]);

    expect(() => {
      const app = new App();
      app.getWinningNums();
    }).toThrow("[ERROR]");
  });

  test("validWinningNums() 단위테스트, 당첨 번호의 유효성을 확인한다. -> 보너스 번호의 형식이 잘못된 경우", () => {
    const winningNums = [
      "1,2,3,4,5,6","5",
      "1,2,3,4,5,6","0",
      "1,2,3,4,5,6","100",
    ];
    mockQuestions(winningNums);

    expect(() => {
      const app = new App();
      app.getWinningNums();
    }).toThrow("[ERROR]");
  });

  test("calLottoProfit() 단위 테스트, 당첨된 로또를 계산하고 등수 Object를 만들어 수익률을 보여준다.", () => {
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
});
