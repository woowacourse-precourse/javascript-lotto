const Validation = require("../src/InputValidate");

describe("입력 금액 테스트", () => {
  test("숫자가 아닌 값 입력", () => {
    const validate = new Validation();
    expect(() => {
      validate
        .inputMoneyValidate("aaa")
        .toThrow("[ERROR] 금액은 숫자만 입력 가능합니다.");
    });
  });
  test("1원 단위 입력", () => {
    const validate = new Validation();
    expect(() => {
      validate
        .inputMoneyValidate(1234)
        .toThrow("[ERROR] 금액은 10원 단위로 입력 가능합니다.");
    });
  });
  test("복권 한장 가격 이하 값 입력", () => {
    const validate = new Validation();
    expect(() => {
      validate
        .inputMoneyValidate(900)
        .toThrow("[ERROR] 1000원 이상부터 구매가 가능합니다.");
    });
  });
});

describe("사용자 발행 복권 번호 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외 발생", () => {
    const validate = new Validation();
    expect(() => {
      validate
        .userNumberValidate([1, 2, 3, 4, 5, 6, 7])
        .toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
    });
  });

  test("로또 번호가 1보다 작거나 45보다 크면 예외 발생", () => {
    const validate = new Validation();
    expect(() => {
      validate
        .userNumberValidate([1, 2, 3, 49, 90, 7])
        .toThrow("[ERROR] 로또 번호는 1 이상 45 이하의 정수여야 합니다.");
    });
  });

  test("로또 번호가 정수가 아니면 예외 발생", () => {
    const validate = new Validation();
    expect(() => {
      validate
        .userNumberValidate(["a", 1, 2, 3, 4, 5])
        .toThrow("[ERROR] 로또 번호는 숫자로만 구성해야 합니다.");
    });
  });
});

describe("보너스 번호 테스트", () => {
  test("보너스 번호의 개수가 1개가 넘어가면 예외 발생", () => {
    const validate = new Validation();
    expect(() => {
      validate
        .bonusNumberValidate("1,4", [1, 2, 3, 4, 5, 6])
        .toThrow("[ERROR] 보너스 번호는 하나만 입력해야 합니다.");
    });
  });

  test("보너스 번호가 숫자가 아니면 예외 발생", () => {
    const validate = new Validation();
    expect(() => {
      validate
        .bonusNumberValidate("aa", [1, 2, 3, 4, 5, 6])
        .toThrow("[ERROR] 보너스 번호는 숫자만 입력 가능합니다.");
    });
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외 발생", () => {
    const validate = new Validation();
    expect(() => {
      validate
        .bonusNumberValidate(1, [1, 2, 3, 4, 5, 6])
        .toThrow("[ERROR] 보너스 번호는 당첨 번호와 중복되면 안됩니다.");
    });
  });
  test("보너스 번호가 1~45 사이 숫자 아니면 예외 발생", () => {
    const validate = new Validation();
    expect(() => {
      validate
        .bonusNumberValidate(49, [1, 2, 3, 4, 5, 6])
        .toThrow("[ERROR] 보너스 번호는 1~45 사이의 정수 입니다.");
    });
  });
});
