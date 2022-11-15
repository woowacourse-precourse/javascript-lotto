const App = require("../src/App");
const Lotto = require("../src/Lotto");

const STATIC = require("../src/static.json");
const ERROR = STATIC.error;

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrowError(ERROR.validate);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrowError(ERROR.duplicate);
  });

  test("로또 번호가 1보다 작거나 45보다 크면 예외가 발생한다.", () => {
    for (let tempNumbers of [[0, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 46]]) {
      expect(() => {
        new Lotto(tempNumbers);
      }).toThrowError(ERROR.range);
    }
  });

  test("보너스 번호가 정수가 아니라면 예외가 발생한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const tempNumbers = lotto.numbers;
    const app = new App;

    expect(() => {
      app.bonusException('string', tempNumbers);
    }).toThrowError(ERROR.string);
  });

  test("보너스 1보다 작거나 45보다 크면 예외가 발생한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const tempNumbers = lotto.numbers;
    const app = new App;

    for (let number of [0, 46]) {
      expect(() => {
        app.bonusException(number, tempNumbers);
      }).toThrowError(ERROR.range);
    }
  });

  test("보너스 번호가 당첨 번호와 중복된다면 예외가 발생한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const tempNumbers = lotto.numbers;
    const app = new App;

    for (let number of [1, 2, 3, 4, 5, 6]) {
      expect(() => {
        app.bonusException(number, tempNumbers);
      }).toThrowError(ERROR.duplicate);
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
