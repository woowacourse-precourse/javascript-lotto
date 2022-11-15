const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");

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

  test("로또 번호에 음수가 있으면 예외 처리.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, -6]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 실수가 있으면 예외 처리.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6.1]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 숫자이외 문자가 있으면 예외 처리.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'a']);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1~45 범위가 아닐경우 있으면 예외 처리.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 0]);
    }).toThrow("[ERROR]");
  });

  test("로또가 정렬기능이 잘 작동하는지 테스트.", () => {
    const lotto = new Lotto([2,5,3,4,1,6]);
    const result = lotto.getNumbers();
    expect(result).toEqual([1,2,3,4,5,6]);
  });
});
