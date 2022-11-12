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
    }).toThrow("[ERROR] 중복된 숫자가 있습니다.");
  });

  // 아래에 추가 테스트 작성 가능
  test("로또 번호에 1-45 외의 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([-1, 2, 3, 4, 5, 100]);
    }).toThrow("[ERROR] 1-45 사이의 숫자가 아닙니다.");
  });

  test("숫자가 아닌 값 입력시 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(["ㄱ", 2, 3, 4, 5, 100]);
    }).toThrow("[ERROR] 숫자가 아닌 값을 입력했습니다.");
  });
});

describe("compareNumbers함수 테스트", () => {
  test("일치하는 숫자가 3개인 경우 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const userLotto = [1, 2, 3, 10, 11, 12];
    const bonusNumber = 10;
    const winningNumber = lotto.getNumbers();
    const answer = lotto.compareNumbers(userLotto, winningNumber, bonusNumber);
    expect(answer).toStrictEqual([3]);
  });
  test("5개 일치하고 보너스 번호 일치하지 않는 경우 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const userLotto = [1, 2, 3, 4, 5, 7];
    const bonusNumber = 10;
    const winningNumber = lotto.getNumbers();
    const answer = lotto.compareNumbers(userLotto, winningNumber, bonusNumber);
    expect(answer).toStrictEqual([5]);
  });
  test("5개 일치하고 보너스 번호 일치하는 경우 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const userLotto = [1, 2, 3, 4, 5, 7];
    const bonusNumber = 7;
    const winningNumber = lotto.getNumbers();
    const answer = lotto.compareNumbers(userLotto, winningNumber, bonusNumber);
    expect(answer).toStrictEqual([5, 7]);
  });
});

describe("countWinningNumber함수 테스트", () => {
  test("로또 번호와 당첨 번호 일치하는 갯수 반환 값 테스트", () => {
    const lotto = new Lotto([3, 5, 11, 16, 32, 23]);
    const userLottoList = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ];
    const bonusNumber = 38;
    const countArray = lotto.countWinningNumber(userLottoList, bonusNumber);
    expect(countArray).toEqual([[1], [5, 38], [2]]);
  });
});
