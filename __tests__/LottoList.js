const LottoList = require("../src/LottoList");

describe("로또 리스트 클래스 테스트", () => {
  test("로또 구입 금액이 1000원 단위가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      const lottoList = new LottoList();
      lottoList.isValidAmount(1200);
    }).toThrow("[ERROR]");
  });

});
