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
  test("로또 번호는 오름차순이 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([6, 5, 4, 3, 2, 1]);
    }).toThrow("[ERROR]");
  });

  test("로또는 몇 개 맞았는지 확인할 수 있다.", () => {
    // given
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const compareInput = "1, 7, 8, 9, 10, 11";
    const bonus = 12;
    // when
    const expectResult = lotto.checkLottoResult(compareInput, bonus);
    //then
    expect(expectResult).toBe(1);
  });
});
