const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외 발생", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외 발생", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 로또 번호는 중복되면 안됩니다.");
  });

  test("로또 번호가 1보다 작거나 45보다 크면 예외 발생", () => {
    expect(() => {
      new Lotto([1, 2, 3, 49, 90, 7]);
    }).toThrow("[ERROR] 로또 번호는 1~45 사이의 정수입니다.");
  });

  test("로또 번호가 정수가 아니면 예외 발생", () => {
    expect(() => {
      new Lotto(["a", 1, 2, 3, 4, 5]);
    }).toThrow("[ERROR] 로또 번호는 숫자로만 구성해야 합니다.");
  });
});
