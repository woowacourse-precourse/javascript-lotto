const Validator = require("../src/validator/Validator");

describe("로또 관련 유효성 테스트", () => {
  test("유효한 로또 개수를 입력하지 않으면 예외를 발생시킨다.", () => {
    expect(() => {
      Validator.isValidLottoNum([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });
  test("로또가 숫자가 아니면 예외를 발생시킨다.", () => {
    expect(() => {
      Validator.isValidLottoType("abc");
    }).toThrow("[ERROR]");
  });
  test("로또가 숫자가 1 ~ 45 범위가 아니면 예외를 발생시킨다.", () => {
    expect(() => {
      Validator.isValidLottoRange([1, 2, 3, 4, 5, 48], [1, 45]);
    }).toThrow("[ERROR]");
  });
  test("로또 숫자가 중복된 숫자이면 예외를 발생시킨다.", () => {
    expect(() => {
      Validator.isDuplicatedLotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });
});
