const Lotto = require("../src/Lotto.js");

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
  test("로또 번호에 숫자가 아닌게 있다면 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 'a', 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 범위에 맞지 않는 숫자가 있다면 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 90]);
    }).toThrow("[ERROR]");
  });

  test("로또 등수를 확인한다.", () => {
    const rank = new Lotto([1, 2, 3, 4, 5, 6]).checkRank([1, 2, 3, 4, 5, 6], 7);
    expect(rank).toEqual(1);
  });

  test("로또 번호를 원하는 형식으로 출력한다.", () => {
    const lottoNumbers = new Lotto([1, 2, 3, 4, 5, 6]).getNumbersToArrayFormat();
    expect(lottoNumbers).toEqual("[1, 2, 3, 4, 5, 6]");
  });
});
