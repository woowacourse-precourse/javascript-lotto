const Generator = require("../src/Generator");

describe("랜덤 번호 생성 클래스 테스트", () => {
  test("구입 금액이 1,000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const generator = new Generator();
      generator.generateRandomNumbers('1500');
    }).toThrow("[ERROR]");
  });

  test("구입 금액에 숫자가 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      const generator = new Generator();
      generator.generateRandomNumbers('1000abc');
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 음수면 예외가 발생한다.", () => {
    expect(() => {
      const generator = new Generator();
      generator.generateRandomNumbers('-1000');
    }).toThrow("[ERROR]");
  });
});
