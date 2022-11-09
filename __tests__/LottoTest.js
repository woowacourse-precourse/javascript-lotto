const Lotto = require("../src/Lotto");

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

  test("로또 번호의 범위가 1 ~ 45가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 77, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 숫자의 범위가 1 ~ 45가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6], 77, 1000);
    }).toThrow("[ERROR]")
  })

  test("금액을 1000원 단위로 입력하지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6], 10, 7777);
    }).toThrow("[ERROR]")
  })

  

  // 아래에 추가 테스트 작성 가능
});
