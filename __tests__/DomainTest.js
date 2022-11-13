const App = require('../src/App');
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
  

describe('1. 사용자의 구입 금액 입력', () => {
    test('사용자가 1,000원을 입력하면 정상적으로 동작한다.', () => {
        mockQuestions(["1000"]);
        const logSpy = getLogSpy();
        const app = new App();
        app.play();
        expect(logSpy).toHaveBeenCalledWith("프로그램 종료");
    });

    test('사용자가 1,030원을 입력하면 예외가 발생한다.', () => {
        mockQuestions(["1030"]);
 
        expect(() => {
          const app = new App();
          app.play();
        })
        .toThrow("[ERROR] 로또 구입 금액은 1,000원 단위로 입력해야 합니다.");
    });
    
})

describe('2. 구입 금액 만큼의 로또 발행', () => {
    test('사용자가 8000원을 입력하면 총 8개의 로또를 발행한다.', () => {
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
        mockQuestions(["8000"]);
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
        ];
        const logSpy = getLogSpy();
        const app = new App();
        app.play();
        logs.forEach((log) => {
          expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });
  
})