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

  test("당첨 번호의 배열에 포함된 번호가 몇개 있는지 확인한다.", () => {
    const lotto = new Lotto();
    const game = [1, 2, 3, 4, 5, 6];
    const numbers = [1, 2, 3, 4, 5, 6];
    lotto.calculateWinningCount(game, numbers);

    expect(lotto.winningCount).toBe(6);
  });

  test("2등 당첨 로직이 잘 작동하는지 확인한다.", () => {
    const lotto = new Lotto();
    const game = [1, 2, 3, 4, 5, 6];
    const numbers = [1, 2, 3, 4, 5, 45];
    const bonusNumber = 6;

    lotto.bonusNumber = bonusNumber;

    lotto.checkPrize(game, numbers);

    expect(lotto.prize.second).toBe(1);
  });

  test("당첨 금액 합계를 구매 금액으로 나눠서 수익률을 구한다.", () => {
    const lotto = new Lotto();
    lotto.calculateYield(5000, 8000);
    expect(lotto.prize.rateOfReturn).toBe("62.5");
  });
});
