const Purchase = require("../src/Purchase");

describe("1000원 단위의 금액을 입력받는다.", () => {
  test("금액으로 1000원 단위로 입력하지 않았을 경우 예외가 발생한다.", () => {
    expect(() => {
      new Purchase(5500);
    }).toThrow("[ERROR]");
  });
  test("구입한 로또 개수를 반환한다.", () => {
    const count = new Purchase(6000).getLottoCount();
    expect(count).toEqual(6);
  });
});
