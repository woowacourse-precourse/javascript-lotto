const LottoStore = require("../src/LottoStore");

describe("validate tests", () => {
  test("입력된 값이 숫자가 아닌 경우 에러를 반환한다.", () => {
    expect(() => {
      LottoStore.prototype.isIncludeStringValidate("8000j");
    }).toThrow("[ERROR]");
  });

  test("입력된 값이 천 단위가 아닌 경우 에러를 반환한다.", () => {
    expect(() => {
      LottoStore.prototype.isMoneyValidate("8001");
    }).toThrow("[ERROR]");
  });
});
