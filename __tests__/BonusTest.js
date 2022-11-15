const Bonus = require("../src/Bonus");
const { ERROR } = require("../src/utils/constant.js");

describe("보너스 번호 클래스 테스트", () => {
  test("로또 번호와 중복되는 숫자가 포함되면 예외 발생한다.", () => {
    expect(() => {
      new Bonus(6, [1, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR.DUPLICATE_ERROR);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("범위 내의 숫자를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(46);
    }).toThrow(ERROR.RANGE_ERROR);
  });

  test("숫자가 아닌 값을 넣으면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("feq");
    }).toThrow(ERROR.BONUS_NUM_ERROR);
  });

  // 아래에 추가 테스트 작성 가능
});
