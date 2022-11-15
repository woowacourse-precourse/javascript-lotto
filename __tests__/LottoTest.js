const { ERROR_MESSAGE } = require("../src/constant/constant");
const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.wrongQuantity);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.hasRepeat);
  });

  test("로또 번호와 우승번호와 비교해서 일치하는 수를 반환", () => {
    expect(new Lotto([1, 2, 3, 4, 5, 6]).compare([2, 3, 4, 5, 6, 7], 1)).toBe(
      5.5
    );

    expect(new Lotto([1, 2, 3, 4, 5, 6]).compare([1, 2, 3, 7, 8, 9], 10)).toBe(
      3
    );
  });
});
