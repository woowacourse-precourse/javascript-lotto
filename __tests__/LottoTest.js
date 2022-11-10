const Budget = require("../src/Budget");
const AutoLotto = require("../src/AutoLotto");

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

  test("구매 금액을 1000으로 나눈다", () => {
    const budget = new Budget();
    budget.divideBudget(8000);
    expect(budget.returnCount()).toBe(8);
  });

  test("중복이 없는 자동 로또를 생성한다.", () => {
    const autoLotto = new AutoLotto();
    autoLotto.makeRandomLottoArray(1);
    const testSet = new Set(...autoLotto.randomLottoArray);
    expect([...testSet].length).toBe(6);
  });
});
