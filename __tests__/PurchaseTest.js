const Purchase = require("../src/Purchase");

describe("로또 클래스 테스트", () => {
  test("숫자는 0으로 시작하면 안된다.", () => {
    expect(() => {
      new Purchase("08000");
    }).toThrow("[ERROR] 0으로 시작하는 숫자는 입력할 수 없습니다.");
  });

  test("로또 구매 금액은 숫자 문자만 입력 가능하다.", () => {
    expect(() => {
      new Purchase("8000.0");
    }).toThrow("[ERROR] 숫자만 입력 가능합니다.");
  });

  test("로또 구매를 1000원 단위로 하지 않았을 경우", () => {
    expect(() => {
      new Purchase("8500");
    }).toThrow("[ERROR] 1,000원 단위로만 구매 가능합니다.");
  });

  test("금액에 따른 로또 생성 횟수 테스트", () => {
    const bundleOfLotto = Purchase.createRandomLotto(8);

    expect(bundleOfLotto.length).toBe(8);
  });
});
