const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const LottoAmount = require("../src/LottoAmount");

describe("LottoplayTest", () => {
  test("구입 금액이 1000원으로 나누어떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      const lottoAmount = new LottoAmount();
      lottoAmount.validateAmount(3400);
    }).toThrow("[ERROR]");
  });
  test("구입 금액에 공백이 포함되면 예외가 발생한다.", () => {
    expect(() => {
      const lottoAmount = new LottoAmount();
      lottoAmount.validateAmount(" ");
    }).toThrow("[ERROR]");
  });
  test("구입 금액을 입력하지 않고 enter를 치면 예외가 발생한다", () => {
    expect(() => {
      const lottoAmount = new LottoAmount();
      lottoAmount.validateAmount("");
    }).toThrow("[ERROR]");
  });
  test("구입 금액이 0이면 예외가 발생한다", () => {
    expect(() => {
      const lottoAmount = new LottoAmount();
      lottoAmount.validateAmount(0);
    }).toThrow("[ERROR]");
  });
  test("구입 금액이 음수이면 예외가 발생한다", () => {
    expect(() => {
      const lottoAmount = new LottoAmount();
      lottoAmount.validateAmount(-3000);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호의 범위가 유효하지 않으면 예외가 발생한다.", () => {
    expect(() => {
      const app = new App();
      app.validateBonusNumber(46);
    }).toThrow("[ERROR]");
  });
});
