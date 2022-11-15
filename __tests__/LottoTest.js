const Lotto = require("../src/Lotto.js");
const { ERROR } = require("../src/utils/constant.js");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR.LENGTH_ERROR);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR.DUPLICATE_ERROR);
  });

  // 아래에 추가 테스트 작성 가능
  test("로또 번호가 1 - 45가 아니면 예외가 발생한다", () => {
    expect(() => {
      new Lotto([46, 2, 3, 4, 6, 5]);
    }).toThrow(ERROR.RANGE_ERROR);
  });

  test("로또 입력 중 숫자가 아닌 값이 입력되면 예외가 발생한다", () => {
    expect(() => {
      const input = ["하하하", 2, 3, 4, 6, 5].map(Number).sort((a, b) => a - b);
      new Lotto(input);
    }).toThrow(ERROR.CORRECT_NUM_ERROR);
  });

  test("로또 입력 중 공백이 포함되면 예외가 발생한다.", () => {
    expect(() => {
      const input = ["2 4", 2, 3, 4, 6, 5].map(Number).sort((a, b) => a - b);
      new Lotto(input);
    }).toThrow(ERROR.CORRECT_NUM_ERROR);
  });
});
