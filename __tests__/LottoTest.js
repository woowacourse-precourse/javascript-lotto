const Lotto = require("../src/Utils/Lotto");
const { MESSAGES } = require("../src/constants");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(MESSAGES.ERROR.isDiffrentLength);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 6]);
    }).toThrow(MESSAGES.ERROR.isDiffrentLength);
  });

  test("로또 번호에 1~45가 아닌 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 0, 6]);
    }).toThrow(MESSAGES.ERROR.isNotRange);
  });
    expect(() => {
      new Lotto([1, 2, 3, 4, 0, 45]);
    }).toThrow(MESSAGES.ERROR.isNotRange);
});
