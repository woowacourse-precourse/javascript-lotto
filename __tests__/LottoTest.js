const Lotto = require("../src/Lotto");
const App = require("../src/App");
const Calculator = require("../src/Calculator");

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

  test("유효한 금액인 검증하기", () => {
    const app = new App();
    const number = ["1400", "50", "", "한글", "10005", "900", "나1000"];

    number.forEach((output) => expect(app.isValidMoney(output)).toEqual(false));
  });

  test("유효한 당첨 숫자인지 검증하기", () => {
    const app = new App();
    const throwInput = [
      "",
      "1,2,3,4,목,금",
      "1,5,6",
      "7",
      "8,8,8,8,8,41,30",
      "70,1,2,3,4,5",
      "-1,5,4,3,2,1",
      "44,,55,65,,,78",
      "4,4,4,4,4,4",
    ];
    const trueInput = ["1,2,3,4,5,6", "5,4,9,12,6,45"];

    throwInput.forEach((output, idx) => {
      expect(app.isValidWinNumbers(output)).toEqual(false);
    });

    trueInput.forEach((output, idx) => {
      expect(app.isValidWinNumbers(output)).toEqual(true);
    });
  });

  test("유효한 보너스 숫자인지 검증하기", () => {
    const app = new App();
    const throwInput = ["", "46", "0", "한글", "e"];

    throwInput.forEach((output, idx) => {
      expect(app.isValidBonusNumber(output)).toEqual(false);
    });
  });

  test("로또 당첨 확인하기", () => {
    const lottos = [
      new Lotto([7, 21, 23, 30, 42, 43]),
      new Lotto([3, 5, 6, 7, 32, 38]),
      new Lotto([7, 11, 16, 35, 36, 44]),
      new Lotto([2, 3, 4, 5, 6, 7]),
      new Lotto([3, 4, 5, 38, 39, 40]),
    ];
    const winNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const result = [
      [3, 5_000, 2],
      [4, 50_000, 0],
      [5, 1_500_000, 0],
      [5.5, 30_000_000, 1],
      [6, 2_000_000_000, 0],
    ];
    const app = new App();
    app.matchLottos(lottos, winNumbers, bonusNumber);

    expect(app.rewards).toEqual(result);
  });

  test("수익률 계산하기", () => {
    const calculator = new Calculator();
    const rewards = [
      [3, 5_000, 2],
      [4, 50_000, 1],
      [5, 1_500_000, 0],
      [5.5, 30_000_000, 0],
      [6, 2_000_000_000, 0],
    ];

    const payMoney = 10_000;
    const sum = (((5000 * 2 + 50000) / payMoney) * 100).toFixed(1);

    expect(calculator.conductRevenue(rewards, payMoney)).toEqual(sum);
  });
});
