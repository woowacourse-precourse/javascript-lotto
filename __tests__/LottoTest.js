const Lotto = require("../src/Lotto");
const lotto = new Lotto();

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      lotto.validate([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
  test("로또 금액이 1000단위가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      lotto.checkAmount(1500);
    }).toThrow("[ERROR]");
  });

  test("로또 구입 개수 확인하기", () => {
    const result = lotto.purchaseLotto(10000);
    expect(result).toBe(10);
  });

  test("로또 구입 후 그 개수만큼 반복문을 돌아 출력되는지 확인하기", () => {
    const result = lotto.printLotto(6);
    expect(result).toHaveLength(6);
  });
});
