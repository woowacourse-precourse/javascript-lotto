const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrowError("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrowError("[ERROR] 로또 번호는 중복되면 안됩니다.");
  });

  test("로또 번호가 1보다 작거나 45보다 크면 예외가 발생한다.", () => {
    for (let tempNumbers of [[0, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 46]]) {
      expect(() => {
        new Lotto(tempNumbers);
      }).toThrowError("[ERROR] 로또 번호는 1 이상 45 이하의 정수여야 합니다.");
    }
  });

  test("보너스 번호가 정수가 아니라면 예외가 발생한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(() => {
      lotto.bonusCharacterCheck('string');
    }).toThrowError("[ERROR] 보너스 점수는 정수로 입력해야 합니다.");
  });

  test("보너스 1보다 작거나 45보다 크면 예외가 발생한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    for (let number of [0, 46]) {
      expect(() => {
        lotto.bonusRangeCheck(number);
      }).toThrowError("[ERROR] 보너스 점수는 1 이상 45 이하의 정수여야 합니다.");
    }
  });

  test("보너스 번호가 당첨 번호와 중복된다면 예외가 발생한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    for (let number of [1, 2, 3, 4, 5, 6]) {
      expect(() => {
        lotto.bonusDuplicateCheck(number);
      }).toThrowError("[ERROR] 보너스 점수는 당첨 번호와 중복되면 안됩니다.");
    }
  });

  test("일치하는 숫자의 개수 별로 금액 반환한다.", () => {
    const tempInputValue = [
      [[1, 2, 3, 4, 5, 6], '7'],
      [[1, 2, 3, 4, 5, 7], '7'],
      [[1, 2, 3, 4, 5, 7], '8'],
      [[1, 2, 3, 4, 7, 8], '9'],
      [[1, 2, 3, 7, 8, 9], '10'],
      [[1, 2, 7, 8, 9, 10], '11'],
    ]
    const tempResult = [2000000000, 30000000, 1500000, 50000, 5000, 0];
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    for (let i = 0; i < 6; i++) {
      const tempWinning = lotto.winningCalculation([tempInputValue[i][0]], tempInputValue[i][1]);
      expect(tempWinning.reward).toBe(tempResult[i]);
    }
  });
});
