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

describe("당첨 통계 저장 기능 테스트", () => {
  test("당첨 통계를 적절하게 저장한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const expected = {
      3: 1,
      4: 0,
      5: 0,
      6: 0,
      "5andBonus": 0,
    };

    lotto.updateStatics(3, true);

    expect(lotto.statics).toEqual(expected);
  });

  test("당첨 통계를 적절하게 저장한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const expected = {
      3: 0,
      4: 0,
      5: 0,
      6: 1,
      "5andBonus": 0,
    };

    lotto.updateStatics(6, false);

    expect(lotto.statics).toEqual(expected);
  });

  test("당첨 통계를 적절하게 저장한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const expected = {
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      "5andBonus": 1,
    };

    lotto.updateStatics(5, true);

    expect(lotto.statics).toEqual(expected);
  });
});

describe("상금 계산 기능 테스트", () => {
  test("정확한 상금을 계산하여 저장한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.statics = {
      3: 1,
      4: 1,
      5: 0,
      6: 0,
      "5andBonus": 1,
    };
    const expected = 30055000;

    Object.keys(lotto.statics).forEach((matchedCount) =>
      lotto.addWinningPrice(matchedCount)
    );

    expect(lotto.totalPrice).toBe(expected);
  });

  test("정확한 상금을 계산하여 저장한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.statics = {
      3: 0,
      4: 0,
      5: 0,
      6: 1,
      "5andBonus": 1,
    };
    const expected = 2030000000;

    Object.keys(lotto.statics).forEach((matchedCount) =>
      lotto.addWinningPrice(matchedCount)
    );

    expect(lotto.totalPrice).toBe(expected);
  });
});

describe("수익률 변환 기능 테스트", () => {
  test("정확한 수익률을 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const earnings = 500.78;
    const expected = "500.8%";

    expect(lotto.convertRate(earnings)).toBe(expected);
  });

  test("정확한 수익률을 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const earnings = 30000.46;
    const expected = "30,000.5%";

    expect(lotto.convertRate(earnings)).toBe(expected);
  });
});
