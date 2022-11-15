const Lotto = require("../src/Lotto");

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
  test("로또 각 자릿수가 1 ~ 45의 범위의 정수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 55]);
    }).toThrow("[ERROR]");
  });

  test("로또 각 자릿수가 정수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5.5]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 맞는 경우 true를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
    expect(lotto.isBonus(7)).toEqual(true);
  });

  test("보너스 번호가 해당 없으면 false를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
    expect(lotto.isBonus(8)).toEqual(false);
  });

  test("당첨 번호와 겹치는 만큼의 수를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
    const luckyNumbers = [1, 2, 3, 4, 9, 10]
    expect(lotto.countNumberOfMatches(luckyNumbers)).toEqual(4);
  });

  test("문자열을 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
    expect(lotto.getNumbers()).toEqual("[1, 2, 3, 4, 5, 7]");
  });
});