const LottoApp = require("../src/Domain/LottoApp");

describe("로또 어플리케이션 테스트케이스", () => {
  test("숫자입력이 올바르지 않다면 에러를 발생시킵니다.", () => {
    expect(() => LottoApp.buyLottos("30")).toThrow();
    expect(() => LottoApp.buyLottos("1001")).toThrow();
    expect(() => LottoApp.buyLottos("ffk")).toThrow();
    expect(() => LottoApp.buyLottos("l000")).toThrow();
  });
});
