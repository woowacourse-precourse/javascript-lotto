const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");
const LottoBuyer = require("../src/LottoBuyer");

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
  test("로또 번호 배열 정렬.", () => {
    let lotto = new Lotto([6, 5, 4, 3, 2, 1]);
    expect(lotto.getLottoNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("로또 구입 금액에 문자가 포함되어 있는 경우", () => {
    expect(() => {
      new LottoBuyer("1000j");
    }).toThrow("[ERROR]");
  });

  test("로또 구입 금액이 1,000원으로 나누어 떨어지지 않는 경우", () => {
    expect(() => {
      new LottoBuyer("1100");
    }).toThrow("[ERROR]");
  });
});
