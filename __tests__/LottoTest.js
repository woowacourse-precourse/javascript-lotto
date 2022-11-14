const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 로또 번호는 중복되지 않는 6자리 숫자여야 합니다.");
  });

  // 아래에 추가 테스트 작성 가능
  test("로또 get 접근자 프로퍼티 확인", () => {
    const lottoNumberArray = [1, 2, 3, 4, 5, 6]
    const lotto = new Lotto(lottoNumberArray);
    expect(lotto.numbers).toEqual(lottoNumberArray);
  })
});
