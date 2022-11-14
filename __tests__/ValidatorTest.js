const Validator = require("../src/Validator");

describe("유효성 검사기 checkPurchaseMoney 메소드 테스트", () => {
  test("숫자가 아닌 구매금액 입력시 예외가 발생한다.", () => {
    expect(() => {
      const validator = new Validator();
      validator.checkPurchaseMoney("5000a")
    }).toThrow("[ERROR]");
  });

  test("1000원 단위 입력이 아닐 시 예외가 발생한다.", () => {
    expect(() => {
      const validator = new Validator();
      validator.checkPurchaseMoney("58400")
    }).toThrow("[ERROR]");
  });
});

describe("유효성 검사기 checkWinningNumber 메소드 테스트", () => {
  test("당첨 번호가 반점으로 구분된 숫자들이 아닐 시 예외가 발생한다.", () => {
    expect(() => {
      const validator = new Validator();
      validator.checkWinningNumber("1 2 3 4 5 6")
    }).toThrow("[ERROR]");
  });

  test("당첨 번호가 반점으로 구분된 숫자들이 아닐 시 예외가 발생한다.", () => {
    expect(() => {
      const validator = new Validator();
      validator.checkWinningNumber("1,2,3,,4,5")
    }).toThrow("[ERROR]");
  });
});

describe("유효성 검사기 checkBonusNumber 메소드 테스트", () => {
  test("보너스 번호가 숫자가 아닐 시 예외가 발생한다.", () => {
    expect(() => {
      const validator = new Validator();
      validator.checkBonusNumber([1,2,3,4,5,6], "8ab")
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 로또 번호 범위가 아닐 시 예외가 발생한다", () => {
    expect(() => {
      const validator = new Validator();
      validator.checkBonusNumber([1,2,3,4,5,6], "100")
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호에 포함 시 예외가 발생한다", () => {
    expect(() => {
      const validator = new Validator();
      validator.checkBonusNumber([1,2,3,4,5,6], "6")
    }).toThrow("[ERROR]");
  });
});

describe("유효성 검사기 isNotNumber 메소드 테스트", () => {
  test("숫자가 아닌지 확인", () => {
    const validator = new Validator();
    expect(validator.isNotNumber("5000a")).toEqual(true);
  });
});

describe("유효성 검사기 isNotUnitOfLottoPrice 메소드 테스트", () => {
  test("로또 가격 단위의 금액이 아닌지 확인", () => {
    const validator = new Validator();
    expect(validator.isNotUnitOfLottoPrice(84200)).toEqual(true);
  });

  test("로또 가격 단위의 금액일 때 테스트", () => {
    const validator = new Validator();
    expect(validator.isNotUnitOfLottoPrice(15000)).toEqual(false);
  });
});

describe("유효성 검사기 isNotRangeOfLottoNumber 메소드 테스트", () => {
  test("로또 범위의 번호가 아닌지 확인", () => {
    const validator = new Validator();
    expect(validator.isNotRangeOfLottoNumber(0)).toEqual(true);
  });

  test("로또 범위의 번호일 때", () => {
    const validator = new Validator();
    expect(validator.isNotRangeOfLottoNumber(45)).toEqual(false);
  });
});

describe("유효성 검사기 existInWinningNumber 메소드 테스트", () => {
  test("보너스 번호가 당첨 번호에 포함 될 때", () => {
    const validator = new Validator();
    expect(validator.existInWinningNumber([1,2,3,4,5,6], 6)).toEqual(true);
  });

  test("보너스 번호가 당첨 번호에 포함되지 않을 때", () => {
    const validator = new Validator();
    expect(validator.existInWinningNumber([1,2,3,4,5,6], 7)).toEqual(false);
  });
});

describe("유효성 검사기 isNotValidLottoNumberCount 메소드 테스트", () => {
  test("로또 번호가 6개가 아닐 때", () => {
    const validator = new Validator();
    expect(validator.isNotValidLottoNumberCount([1,2,3,4,5])).toEqual(true);
  });

  test("로또 번호가 6개일 때", () => {
    const validator = new Validator();
    expect(validator.isNotValidLottoNumberCount([1,2,3,4,5,6])).toEqual(false);
  });
});

describe("유효성 검사기 hasDuplicateNumber 메소드 테스트", () => {
  test("로또 번호에 중복이 있을 때", () => {
    const validator = new Validator();
    expect(validator.hasDuplicateNumber([1,2,3,4,5,5])).toEqual(true);
  });

  test("로또 번호에 중복이 없을 때", () => {
    const validator = new Validator();
    expect(validator.hasDuplicateNumber([1,2,3,4,5,6])).toEqual(false);
  });
});
