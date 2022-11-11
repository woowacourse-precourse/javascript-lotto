const Validation = require("../src/Validation");

describe("입력값 유효 테스트", () => {
  test("로또 번호 숫자만 입력 테스트", () => {
    const numbers = ["1", "2", "3", "6i"];
    expect(() => {
      Validation.validateIsNotNumber(...numbers);
    }).toThrow("[ERROR]");
  });
  test("로또 번호 숫자 범위 유효 입력 테스트", () => {
    const numbers = ["1", "2", "3", "65"];
    expect(() => {
      Validation.validateNumbersRange(numbers);
    }).toThrow("[ERROR]");
  });
  test("자금 % 1000가 0인지 입력 테스트", () => {
    expect(() => {
      Validation.validateIsDivideThousand(8001);
    }).toThrow("[ERROR]");
  });
  test("로또 번호에 중복된 숫자가 있는지 테스트", () => {
    const numbers = ["1", "2", "3", "4", "5", "1"];
    expect(() => {
      Validation.validateIsDuplicated(numbers);
    }).toThrow("[ERROR]");
  });
  describe("로또 번호 입력이 6개 인지 테스트", () => {
    test("6개보다 많을 때", () => {
      const numbers = ["1", "2", "3", "4", "5", "6", "7"];
      expect(() => {
        Validation.validateSizeIsSix(numbers);
      }).toThrow("[ERROR]");
    });
    test("6개보다 적을 때", () => {
      const numbers = ["1", "2", "3", "4", "5"];
      expect(() => {
        Validation.validateSizeIsSix(numbers);
      }).toThrow("[ERROR]");
    });
  });
  test("보너스 번호가 로또 번호와 겹치는지 테스트", () => {
    const numbers = ["1", "2", "3", "4", "5", "6"];
    const bonusNumber = "2";
    expect(() => {
      Validation.validateBonusNumber(bonusNumber, numbers);
    }).toThrow("[ERROR]");
  });
});
