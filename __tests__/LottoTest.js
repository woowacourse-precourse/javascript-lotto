const Lotto = require("../src/Lotto");
const ValidationCheck = require("../src/model/inputCheck");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
  test("1~45의 범위에서 벗어나는 숫자가 있는 경우 - 45초과", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("1~45의 범위에서 벗어나는 숫자가 있는 경우 - 1미만", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});

describe("구입 금액 예외 테스트", () => {
  const inputCheck = new ValidationCheck();
  test("숫자 이외의 문자가 들어 있는 경우 - 특수문자", () => {
    expect(() => {
      inputCheck.isMoneyValid("-1000");
    }).toThrow("[ERROR]");
  });

  test("숫자 이외의 문자가 들어 있는 경우 - 알파벳", () => {
    expect(() => {
      inputCheck.isMoneyValid("1e9");
    }).toThrow("[ERROR]");
  });

  test("숫자 이외의 문자가 들어 있는 경우 - 한글", () => {
    expect(() => {
      inputCheck.isMoneyValid("1000ㄱ");
    }).toThrow("[ERROR]");
  });

  test("자연수이지만 1,000으로 나누어 떨어지지 않을 경우", () => {
    expect(() => {
      inputCheck.isMoneyValid("1001");
    }).toThrow("[ERROR]");
  });
});

describe("당첨 번호 예외 테스트", () => {
  const inputCheck = new ValidationCheck();
  test("1~45 사이의 숫자/',' 이외의 다른 문자가 들어 있는 경우 - 알파벳", () => {
    expect(() => {
      inputCheck.isWinningNumberValid("1,a,3,4,5,6");
    }).toThrow("[ERROR]");
  });

  test("1~45 사이의 숫자/',' 이외의 다른 문자가 들어 있는 경우 - 한글", () => {
    expect(() => {
      inputCheck.isWinningNumberValid("ㄱ,2,3,4,5,6");
    }).toThrow("[ERROR]");
  });

  test("1~45 사이의 숫자/',' 이외의 다른 문자가 들어 있는 경우 - 특수문자", () => {
    expect(() => {
      inputCheck.isWinningNumberValid("1,2,3,%,5,6");
    }).toThrow("[ERROR]");
  });

  test("총 숫자 개수가 6개가 아닌 경우", () => {
    expect(() => {
      inputCheck.isWinningNumberValid("1,2,3,4");
    }).toThrow("[ERROR]");
  });

  test("숫자들이 ','를 기준으로 구분되지 않은 경우", () => {
    expect(() => {
      inputCheck.isWinningNumberValid("1.2.3.4.5.6");
    }).toThrow("[ERROR]");
  });
});

describe("보너스 번호 예외 테스트", () => {
  const inputCheck = new ValidationCheck();
  test("숫자 이외의 문자가 들어 있는 경우", () => {
    expect(() => {
      inputCheck.isBonusNumberValid([1, 2, 3, 4, 5, 6], "1aㄱ$");
    }).toThrow("[ERROR]");
  });

  test("자연수이지만 당첨 번호와 겹치는 숫자일 경우", () => {
    expect(() => {
      inputCheck.isBonusNumberValid([1, 2, 3, 4, 5, 6], "1");
    }).toThrow("[ERROR]");
  });
});
