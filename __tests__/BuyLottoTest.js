describe("구입 금액 유효성 테스트", () => {
  test("구입 금액이 문자면 예외가 발생한다.", () => {
    const input = 'abc';
    expect(() => {
      input;
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 특수문자이면 예외가 발생한다.", () => {
    const input = '!5';
    expect(() => {
      input;
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 공백이면 예외가 발생한다.", () => {
    const input = ' ';
    expect(() => {
      input;
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1000원 미만이면 예외가 발생한다.", () => {
    const input = 500;
    expect(() => {
      input;
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    const input = 15692;
    expect(() => {
      input;
    }).toThrow("[ERROR]");
  });

});