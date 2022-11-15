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

  test("로또 구매 금액에 대해 몇 개의 로또를 구매할 수 있는지 알 수 있다.", () => {
    expect(Lotto.caculateLottoNumPerUnit(1000)).toBe(1);
    expect(Lotto.caculateLottoNumPerUnit(19000)).toBe(19);
    expect(Lotto.caculateLottoNumPerUnit(25000)).toBe(25);
  });

  test("생성자를 통해 만들어진 로또 인스턴스의 getter를 통해 로또 번호를 가져올 수 있다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
    expect(lotto.getNumbers).toEqual([1, 2, 3, 4, 5, 7]);
  });
});
