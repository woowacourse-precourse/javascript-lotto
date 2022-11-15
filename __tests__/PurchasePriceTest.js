const PurchasePrice = require("../src/PurchasePrice");

describe("로또 구입 금액 입력 테스트", () => {

  test("로또 구입 금액은 숫자형태여야 합니다", () => {
    expect(() => {
        PurchasePrice.vaildatePurchasePrice('8000j')
    }).toThrow('[ERROR] 로또 구입 금액은 숫자여야 합니다.');
  });

  
  test("로또 구입 금액은 1000원 단위여야 합니다", () => {
    expect(() => {
        PurchasePrice.vaildatePurchasePrice('6430')
    }).toThrow('[ERROR] 로또 구입 금액은 1000원 단위여야 합니다.');
  });


});
