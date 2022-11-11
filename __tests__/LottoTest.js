const Lotto = require("../src/Lotto");

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
});

describe("Lotto 클래스의 makeSixNumbers() 기능 테스트", () => {
  test("6자리로 만들어지는지 확인", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const numbersLength = lotto.makeSixNumbers().length;
    expect(numbersLength).toBe(6);
  });

  test("6자리 숫자에 중복값은 없는지 확인", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const sixNumbers = lotto.makeSixNumbers();
    const noDuplicateNumber = [...new Set(sixNumbers)];
    expect(sixNumbers.length).toEqual(noDuplicateNumber.length);
  });
});
