const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

// const mockQuestions = (answers) => {
//   MissionUtils.Console.readLine = jest.fn();
//   answers.reduce((acc, input) => {
//     return acc.mockImplementationOnce((question, callback) => {
//       callback(input);
//     });
//   }, MissionUtils.Console.readLine);
// };

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("App 클래스 validation 테스트", () => {
  test("로또 구입 금액이 1000원 단위가 아닌 경우 에러 발생", () => {
    const app = new App();
    expect(() => {
      app.priceValidate(1200);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 한 자리가 아닌 경우 에러 발생", () => {
    const app = new App();
    expect(() => {
      app.bonusValidate("99");
    }).toThrow("[ERROR]");
  });
  // 아래에 추가 테스트 작성 가능
});

describe("App 클래스 메소드 테스트 ", () => {
  test("구매 갯수 계산 함수 테스트", () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.buyAmountCalculate(3000);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("3개를 구매했습니다.")
    );
  });

  test("로또 생성 함수 테스트", () => {
    const app = new App();
    app.buyPrice = 3000;
    app.createLottoNumber();
    expect(app.lottoArray).toHaveLength(3);
  });

  // 아래에 추가 테스트 작성 가능
});
