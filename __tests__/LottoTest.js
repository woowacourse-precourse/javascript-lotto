const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");

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

  test("로또 번호에 숫자가 아닌 다른 문자가 들어오면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, "ㄱ", "a", "b", 3]);
    }).toThrow("[ERROR]");
  });

  MissionUtils.Console.close();

  // 아래에 추가 테스트 작성 가능
});
