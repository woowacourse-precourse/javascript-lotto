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

  test("보너스 번호에 로또 번호와 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.validateBonusNumber(6);
    }).toThrow("[ERROR]");
  });

  test("각 한 쌍의 랜덤 로또 번호와 당첨 로또 번호 일치 개수 및 보너스 번호와의 일치 개수를 확인한다., ", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const result = lotto.winningStatistics(7, [
      [1, 2, 3, 4, 8, 10],
      [5, 6, 7, 18, 15, 34],
    ]);
    expect(result).toEqual([
      [4, 2],
      [0, 1],
    ]);
  });

  test("당첨 로또 개수를 계산하여 개수를 확인한다., ", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const result = lotto.countWinningLotto([0, 3, 4, 5], [0, 0, 0, 1], 4);
    // 0개일치하는 로또 개수, 1개 일치하는 로또 개수 ~ 5개 일치, 5개일치 & 보너스 일치, 6개 일치하는 로또 개수 배열반환.
    expect(result).toEqual([1, 0, 0, 1, 1, 0, 1, 0]);
  });

  test("랜덤 로또 한 장이 당첨 로또 번호와 몇 개가 일치하는지 확인한다., ", () => {
    const lotto = new Lotto([18, 21, 34, 39, 44, 45]);
    const result = lotto.compareBoughtLottoAndWinningNumbers([
      1, 2, 3, 18, 21, 34,
    ]);
    expect(result).toBe(3);
  });

  test("랜덤 로또 한 장이 당첨 보너스 번호와 몇 개가 일치하는지 확인한다., ", () => {
    const lotto = new Lotto([18, 21, 34, 39, 44, 45]);
    const result = lotto.compareBoughtLottoAndBonusNumber(
      [1, 2, 3, 18, 21, 44],
      18
    );

    expect(result).toBe(1);
  });
});
