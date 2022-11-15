const Lotto = require("../src/model/Lotto");
const { ERROR } = require("../src/utils/constants");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR.COUNT);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR.DUPLICATED);
  });

  // 아래에 추가 테스트 작성 가능

  test("로또 번호에 1~45의 범위를 벗어나는 번호가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 30, 32, 40, 48, 55]);
    }).toThrow(ERROR.RANGE);
  });

  test("등수를 구하는 경우", () => {
    const lotto = new Lotto([8, 13, 17, 22, 26, 41]);
    const winningNumber = [2, 8, 13, 22, 41, 45];
    const bonusNum = 10;

    const rank = lotto.getRank(winningNumber, bonusNum);

    expect(rank).toEqual(4);
  });
});
