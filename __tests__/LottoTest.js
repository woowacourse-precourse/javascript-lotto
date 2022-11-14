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

describe.only("구매 금액 테스트", () => {
  test("구매 금액이 1000원 단위가 아닐 시 false 발생.", () => {
    const result = Validation.validatePurchaseAmount(3000);

    expect(result).toBe(false);
  });
});

describe("보너스 번호 테스트", () => {
  test("보너스 번호가 당첨번호와 중복되면 false 발생.", () => {
    const result = Validation.hasUniqueBonusNumber(1, [1, 2, 3, 4, 5, 6]);

    expect(result).toBe(false);
  });
});
