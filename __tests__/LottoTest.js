const Lotto = require("../src/Lotto");
const BonusNumberError = require("../src/BonusNumberError")

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
  test("로또 번호에 숫자가 아닌 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, "a", 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 범위가 아닌 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 77]);
    }).toThrow("[ERROR]");
  });

  // 보너스 넘버 검증
  test("보너스 번호가 1개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumberError([1, 2]);
    }).toThrow("[ERROR]");
  });

});
