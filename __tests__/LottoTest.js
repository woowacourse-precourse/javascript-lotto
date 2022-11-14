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

  // 아래에 추가 테스트 작성 가능
  test("로또 생성자를 호출할 때 객체 타입(배열)이 주어지지 않을 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto("1,2,3,4,5,6");
    }).toThrow(TypeError);
  });

  test("로또 구매 금액에 따라 몇개의 로또를 구매할 수 있는지 알 수 있다.", () => {
    expect(Lotto.calculateLottoCountWithPurchaseAmount(1000)).toBe(1);
    expect(Lotto.calculateLottoCountWithPurchaseAmount(5000)).toBe(5);
    expect(Lotto.calculateLottoCountWithPurchaseAmount(10000)).toBe(10);
  });

  test("로또 생성자를 통해 만들어진 로또의 getter를 통해 로또 번호를 가져올 수 있다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.lottoNumbers).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
