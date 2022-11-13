const MissionUtils = require("@woowacourse/mission-utils");
const LottoPlay = require("../src/Lottoplay");

describe("LottoplayTest", () => {
  test("구입 금액이 1000원으로 나누어떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      const lottoplay = new LottoPlay();
      lottoplay.validateAmountUnit(3400);
    }).toThrow("[ERROR]");
  });
});
