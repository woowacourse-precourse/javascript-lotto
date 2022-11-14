const Lottos = require("../src/model/Lottos");

describe("Lottos 클래스 테스트", () => {
  test("구입 금액이 1,000원으로 나누어 떨어지지 않는 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lottos(15500);
    }).toThrow("[ERROR] 1000원 단위로 입력해주세요.");
  });

  test("숫자를 입력하지 않는 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lottos("만원");
    }).toThrow("[ERROR] 숫자를 입력해주세요.");
  });
});
