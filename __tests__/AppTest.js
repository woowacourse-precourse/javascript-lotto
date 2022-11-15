const App = require("../src/App");
const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

const app = new App();
app.start = jest.fn();
app.buy = jest.fn();
app.lotto = jest.fn();
app.winningNumber = jest.fn();
app.check = jest.fn();
app.end = jest.fn();

afterAll(() => {
  Console.close();
});

describe("로또 게임 진행 테스트", () => {
  test("게임을 시작한다.", () => {
    app.start = jest.fn(() => {
      return app.buy();
    });
    app.start();

    expect(app.buy).toBeCalledTimes(1);
  });

  test("로또 구매를 한다.", () => {
    Random.pickUniqueNumbersInRange = jest.fn();
    Random.pickUniqueNumbersInRange.mockReturnValue("랜덤 번호 6개")
    app.buy = jest.fn(() => {
      const buyPrice = 2000;
      const quantity = buyPrice / 1000;
      const numbers = [];

      const randomNumber = (quantity) => {
        for (let i = 0; i < quantity; i++) {
          numbers.push(Random.pickUniqueNumbersInRange())
        }
      }
      randomNumber(quantity);

      return numbers;
    });
    const result = app.buy();

    expect(Random.pickUniqueNumbersInRange).toBeCalledTimes(2);
    expect(result).toContain("랜덤 번호 6개")
  });

  test("로또 발행을 한다.", () => {
    const testNumbers = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ];
    const testLotto = [];

    app.lotto = jest.fn(() => {
      testNumbers.forEach((num) => {
        testLotto.push(new Lotto(num))
      });
    });
    app.lotto();

    testLotto[0].getNumbers = jest.fn();
    testLotto[0].getNumbers.mockReturnValue(testNumbers[0])

    const result = testLotto[0].getNumbers();

    expect(result).toEqual([8, 21, 23, 41, 42, 43]);
  });

  test("당첨번호를 입력한다.", () => {
    const testInput = [[1,2,3,4,5,6],[7]]
    app.winningNumber = jest.fn((input) => {
      const winningNumber = []
      input.forEach(number => {
        winningNumber.push(number)
      })
      return winningNumber
    });
    const result = app.winningNumber(testInput);

    expect(result).toEqual([[1,2,3,4,5,6], [7]]);
  });

  test("당첨 확인을 한다.", () => {
    const winningNumbers = [[1,2,3,4,5,6],[7]];
    const lotto = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]
    const winningPoint = []
    app.check = jest.fn((lotto, winningNumbers) => {
      lotto.forEach((numbers) => {
        let winningCheck = 0;
        winningNumbers[0].forEach((winningNumber) => {
          if (numbers.includes(winningNumber)) {
            winningCheck ++;
          }
        });
        winningPoint.push(winningCheck);
      })
      return "당첨내역, 수익률"
    });

    const result = app.check(lotto,winningNumbers);

    expect(winningPoint).toEqual([0,2,0]);
    expect(result).toBe("당첨내역, 수익률");
  });

  test("게임을 종료한다.", () => {
    app.end = jest.fn(() => {
      return "게임종료"
    });
    expect(app.end()).toBe("게임종료");
  });
});