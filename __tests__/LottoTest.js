const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");

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

  test("보너스 번호가 로또 번호에 포함된 경우 예외 발생", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(() => {
      lotto.validateBonus(6, [1, 2, 3, 4, 5, 6], 8000);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 허용되지 않은 값의 경우 예외 발생 ex)0", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(() => {
      lotto.validateBonus(0, [1, 2, 3, 4, 5, 6], 8000);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 허용되지 않은 값의 경우 예외 발생 ex)문자", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(() => {
      lotto.validateBonus("a", [1, 2, 3, 4, 5, 6], 8000);
    }).toThrow("[ERROR]");
  });
});
