const Budget = require("../src/Budget");
const AutoLotto = require("../src/AutoLotto");
const Lotto = require("../src/Lotto");
const ExceptionHandler = require("../src/ExceptionHandler");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      ExceptionHandler.winningNumberLength("1,2,3,4,5,6,7");
    }).toThrow("[ERROR] 숫자를 6개 입력해주세요.");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      ExceptionHandler.winningNumberRedundancy("1,2,3,4,5,5");
    }).toThrow("[ERROR] 당첨 번호를 중복없이 입력해주세요.");
  });

  test("구매 금액을 1000으로 나눈다", () => {
    const budget = new Budget();
    budget.divideBudget(8000);
    expect(budget.returnCount()).toBe(8);
  });

  test("중복이 없는 자동 로또를 생성한다.", () => {
    const autoLotto = new AutoLotto();
    autoLotto.makeRandomLottoArray(1);
    const testSet = new Set(autoLotto.randomLottoArray[0]);
    expect([...testSet].length).toBe(6);
  });
});
