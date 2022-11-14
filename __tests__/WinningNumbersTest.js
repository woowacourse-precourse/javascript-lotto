describe("당첨 번호 유효성 테스트", () => {
  test("당첨 번호가 6개 초과이면 예외가 발생한다.", () => {
    const input = [1,2,3,4,5,6,7];
    expect(() => {
      input;
    }).toThrow("[ERROR]");
  });

  test("당첨 번호가 특수문자가 섞이면 예외가 발생한다.", () => {
    const input = [1,2,3,4,5,'!'];
    expect(() => {
      input;
    }).toThrow("[ERROR]");
  });

  test("당첨 번호가 공백이 있으면 예외가 발생한다.", () => {
    const input = [1,2,3,4,5,' '];
    expect(() => {
      input;
    }).toThrow("[ERROR]");
  });

  test("당첨 번호는 1~45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    const input = [1,2,3,4,5,0];
    expect(() => {
      input;
    }).toThrow("[ERROR]");
  });

  test("당첨 번호가 중복이면 예외가 발생한다.", () => {
    const input = [1,2,3,3,4,5];
    expect(() => {
      input;
    }).toThrow("[ERROR]");
  });

});

describe("보너스 번호 유효성 테스트", () => {
    test("보너스 번호가 특수문자이면 예외가 발생한다.", () => {
    const input = !;
    expect(() => {
      input;
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 공백이면 예외가 발생한다.", () => {
    const input = " ";
    expect(() => {
      input;
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 문자이면 예외가 발생한다.", () => {
    const input = 'a';
    expect(() => {
      input;
    }).toThrow("[ERROR]");
  });

  test("보너스 번호는 1~45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    const input = 46;
    expect(() => {
      input;
    }).toThrow("[ERROR]");
  });

  test("보너스 번호와 당첨 번호가 중복이면 예외가 발생한다.", () => {
    const input = [1,2,3,3,4,5];
    expect(() => {
      input;
    }).toThrow("[ERROR]");
  });

});