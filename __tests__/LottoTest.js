const Lotto = require("../src/Lotto");
const { IS_ENOUGH } = require("../src/const/ErrorMessages");
const { Console } = require("@woowacourse/mission-utils");

afterAll(() => {
  Console.close();
});

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(IS_ENOUGH);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(IS_ENOUGH);
  });

  test("5등 당첨", () => {
    const LOTTO = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(LOTTO.win([1, 2, 3, 7, 8, 9], 10)).toBe(5);
  });

  test("4등 당첨", () => {
    const LOTTO = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(LOTTO.win([1, 2, 3, 4, 8, 9], 10)).toBe(4);
  });

  test("3등 당첨", () => {
    const LOTTO = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(LOTTO.win([1, 2, 3, 4, 5, 9], 10)).toBe(3);
  });

  test("2등 당첨", () => {
    const LOTTO = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(LOTTO.win([1, 2, 3, 4, 5, 9], 6)).toBe(2);
  });

  test("1등 당첨", () => {
    const LOTTO = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(LOTTO.win([1, 2, 3, 4, 5, 6], 10)).toBe(1);
  });
});
