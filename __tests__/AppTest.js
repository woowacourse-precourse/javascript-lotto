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

const getLogSpy = (funcName) => {
  const logSpy = jest.spyOn(App.prototype, funcName);
  logSpy.mockClear();
  return logSpy;
};

describe("앱 클래스 테스트", () => {
  // test("inputPurchase 테스트 - 구매 금액을 입력받고 inpuWinNum을 호출", () => {
  //   const inputPruchaseLogSpy = getLogSpy('inputPurchase');
  //   mockQuestions(['8000']);
  //   const app = new App();
  //   app.inputPurchase();
  //   expect(inputPruchaseLogSpy).toHaveBeenCalled();
  // });

  // test("inputWinNum 테스트 - 당첨 번호를 입력받고 inputBonusNum을 호출", () => {
  //   const inputWinNumLogSpy = getLogSpy('inputWinNum');
  //   mockQuestions(['1,2,3,4,5,6']);
  //   const app = new App();
  //   app.inputWinNum();
  //   expect(inputWinNumLogSpy).toHaveBeenCalled();
  // });

  // test("inputBonusNum 테스트 - 보너스 번호를 입력받고 getResult를 호출", () =>{
  //   const inputBonusNumLogSpy = getLogSpy('inputBonusNum');
  //   mockQuestions(['7']);
  //   const app = new App();
  //   app.inputBonusNum();
  //   expect(inputBonusNumLogSpy).toHaveBeenCalled();
  // });

  test("validate 테스트 - 숫자가 입력되었는지 확인", () => {
    const app = new App();
    expect(() => {
      app.validate('1')
    }).not.toThrow();

    expect(() => {
      app.validate('a')
    }).toThrow('[ERROR]');
  });
  MissionUtils.Console.close();
});