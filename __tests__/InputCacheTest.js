const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

describe("로또 금액 입력 테스트", () => {
  afterAll(() => {
    MissionUtils.Console.close();
  });
  test("정상 출력1", () => {
    const app = new App();
    expect(app.isValidCacheInput('8000')).toBe(8);
  });

  test("정상 출력2", () => {
    const app = new App();
    expect(app.isValidCacheInput('12000')).toBe(12);
  });

  test("숫자 아닌 입력", () => {
    const app = new App();
    expect(() => app.isValidCacheInput('8000!')).toThrow("[ERROR]");
  });

  test("1000단위 아님", () => {
    const app = new App();
    expect(() => app.isValidCacheInput('80234')).toThrow("[ERROR]");
  });

});
