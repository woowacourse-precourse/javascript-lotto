const GenerateLotto = require("../src/GenerateLotto");

describe("로또생성 클래스 테스트", () => {
  test("구입 금액이 1000원 단위가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      new GenerateLotto(1234);
    }).toThrow("[ERROR]");
  });

  test("구입 금액에 숫자가 아닌 무언가가 있다면 예외가 발생한다.", () => {
    expect(() => {
      new GenerateLotto('a123b');
    }).toThrow("[ERROR]");
  });
});
