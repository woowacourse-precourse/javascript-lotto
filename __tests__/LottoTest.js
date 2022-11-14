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
  test("로또를 문자열로 변환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.numberToString()).toEqual("[1, 2, 3, 4, 5, 6]");
  });

  test("로또 중 몇개가 정답인지 확인한다.", () => {
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 6]);
    const lotto2 = new Lotto([7, 8, 9, 10, 11, 12]);
    expect(lotto1.winningCount([1, 2, 3, 7, 8, 9])).toEqual(3);
    expect(lotto2.winningCount([7, 8, 9, 10, 11, 12])).toEqual(6);
  });
});
