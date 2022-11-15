const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");

describe("수익률 테스트", () => {
  afterAll(() => {
    MissionUtils.Console.close();
  });

  test("수익률 정상 출력 확인", () => {
    const app = new App();
    const rate = app.printYieldRate(5000, 8000);
    expect(app.rate).toBeCloseTo(62.5);
  });

  test("수익률 소숫점 둘째자리에서 반올림", () => {
    const app = new App();
    const rate = app.printYieldRate(5000, 9000);
    expect(app.rate).toBeCloseTo(55.6);
  });

  test("수익률 100% 초과 확인", () => {
    const app = new App();
    const rate = app.printYieldRate(50000, 8000);
    expect(app.rate).toBeCloseTo(625);
  });


});
