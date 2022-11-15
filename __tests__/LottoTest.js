const Lotto = require("../src/model/Lotto");

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

  test("로또 번호의 개수가 6개보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호 배열에 정수가 아닌 숫자가 존재하면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([".", "?", "이승환", "Lee", 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호 배열에 1~45 범위를 벗어난 숫자가 존재하면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호 배열에 같은 숫자들이 존재하면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("검증을 마친 로또 번호 배열을 반환하는 getter 함수 동작 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getLottoNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
