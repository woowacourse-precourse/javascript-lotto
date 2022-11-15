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

describe("App 클래스 validation", () => {
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
