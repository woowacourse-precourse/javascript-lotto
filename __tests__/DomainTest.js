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
