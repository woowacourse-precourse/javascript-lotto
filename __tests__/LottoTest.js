const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개를 쉼표(,)로 구분하여 정확하게 입력해 주세요.");
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 0, 0]);
    }).toThrow("[ERROR] 로또 번호는 6개를 쉼표(,)로 구분하여 정확하게 입력해 주세요.");
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR] 로또 번호는 6개를 쉼표(,)로 구분하여 정확하게 입력해 주세요.");
    expect(() => {
      new Lotto([]);
    }).toThrow("[ERROR] 로또 번호는 6개를 쉼표(,)로 구분하여 정확하게 입력해 주세요.");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 중복되지 않는 숫자를 입력하세요.");
    expect(() => {
      new Lotto([1, 2, 4.55, 4.55, 5, 6]);
    }).toThrow("[ERROR] 중복되지 않는 숫자를 입력하세요.");
    expect(() => {
      new Lotto([1, 2, 3, 5, 5, 60]);
    }).toThrow("[ERROR] 중복되지 않는 숫자를 입력하세요.");
  });

  test("로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, "e", 5, 6]);
    }).toThrow("[ERROR] 숫자를 입력하세요.");
    expect(() => {
      new Lotto(["$", 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 숫자를 입력하세요.");
    expect(() => {
      new Lotto(["$", 2, 4.55, 4.55, 5, 6]);
    }).toThrow("[ERROR] 숫자를 입력하세요.");
  });

  test("로또 번호의 숫자가 1~45 범위가 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 0, 5, 6]);
    }).toThrow("[ERROR] 1부터 45까지 숫자 중 입력하세요.");
    expect(() => {
      new Lotto([1, 2, 3, 4, 40, 50]);
    }).toThrow("[ERROR] 1부터 45까지 숫자 중 입력하세요.");
  });

  test("로또 번호가 소수의 형태로 입력되면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4.55, 5, 6]);
    }).toThrow("[ERROR] 정수를 입력하세요.");
  });
});
