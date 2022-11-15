const Lotto = require("../src/Lotto");
const Validation = require("../src/Validation");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호는 1부터 45 사이의 이외의 숫자는 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 50]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호는 1부터 45 사이의 이외의 숫자는 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 9]);
    }).toThrow("[ERROR]");
  });
});

describe("보너스 번호 테스트", () => {
  test("보너스 번호가 당첨번호와 중복되면 false 발생.", () => {
    const result = Validation.hasUniqueBonusNumber(1, [1, 2, 3, 4, 5, 6]);

    expect(result).toBe(false);
  });
});

describe("로또 구입 금액 테스트", () => {
  test("input에 숫자외에 문자가 포함된 경우 false를 반환해야 한다.", () => {
    const input = "1000j";
    const purchaseAmountArr = input.split("");
    const result = Validation.isValidAmountType(purchaseAmountArr);

    expect(result).toBe(false);
  });
});
