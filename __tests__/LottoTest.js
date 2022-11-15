const Lotto = require("../src/Lotto");

describe("당첨 번호 예외 테스트", () => {
  test("당첨 번호로 숫자가 아닌 값을 입력하는 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(["안녕하세요"]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호로 숫자가 아닌 값을 입력하는 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(["#$@!@!$"]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호의 개수가 6개를 초과하면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호의 개수가 6개보다 적으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호의 숫자가 1보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 0]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호의 숫자가 45보다 크면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 48, 8]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });
});

describe("보너스 번호 예외 테스트", () => {
  const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

  test("보너스 번호로 숫자가 아닌 값을 입력하는 경우 예외가 발생한다.", () => {
    expect(() => {
      lotto.validateBonusNum("우테코");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호로 숫자가 아닌 값을 입력하는 경우 예외가 발생한다.", () => {
    expect(() => {
      lotto.validateBonusNum("*^^*");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호의 숫자가 1보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      lotto.validateBonusNum(0);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호의 숫자가 45보다 크면 예외가 발생한다.", () => {
    expect(() => {
      lotto.validateBonusNum(50);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호의 숫자가 당첨 번호와 중복되는 경우 예외가 발생한다.", () => {
    expect(() => {
      lotto.validateBonusNum(6);
    }).toThrow("[ERROR]");
  });
});
