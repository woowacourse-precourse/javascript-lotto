const Lotto = require("../src/Lotto");
const App = require("../src/App");

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

  test("1000으로 나누어 떨어지는 숫자가 아닌 경우, 예외가 발생한다.", () => {
    const app = new App();
    const number = ["1400", "50", "", "한글", "10005", "900", "나1000"];
    const isValid = false;

    number.forEach((output) =>
      expect(app.isValidMoney(output)).toEqual(isValid)
    );
  });

  test("[입력]로또 번호에 잘못된 입력시", () => {
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
    ];
    const trueInput = ["1,2,3,4,5,6", "5,4,9,12,6,45"];

    throwInput.forEach((output, idx) => {
      let winNumbers = new Set(output.split(",").map(Number));
      expect(app.isValidWinNumbers(winNumbers)).toEqual(false);
    });

    trueInput.forEach((output, idx) => {
      let winNumbers = new Set(output.split(",").map(Number));
      expect(app.isValidWinNumbers(winNumbers)).toEqual(true);
    });
  });

  test("[입력]보너스 번호에 잘못된 입력시", () => {
    const app = new App();
    const throwInput = ["", "46", "0", "한글", "e"];

    throwInput.forEach((output, idx) => {
      expect(app.isValidBonusNumber(output)).toEqual(false);
    });
  });

  test("동일한 로또 번호의 개수를 구하기", () => {
    const lottos = [
      new Lotto([7, 21, 23, 30, 42, 43]),
      new Lotto([3, 5, 6, 7, 32, 38]),
      new Lotto([7, 11, 16, 35, 36, 44]),
      new Lotto([2, 3, 4, 5, 6, 7]),
      new Lotto([3, 4, 5, 38, 39, 40]),
    ];
    const winNumbers = new Set([1, 2, 3, 4, 5, 6]);
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

  test("수익률 구하기", () => {
    const app = new App();
    app.rewards = [
      [3, 5_000, 1],
      [4, 50_000, 2],
      [5, 1_500_000, 0],
      [5.5, 30_000_000, 0],
      [6, 2_000_000_000, 0],
    ];
    app.payMoney = 10000;
    const result =
      Math.round(5000 + ((10000 * 2) / app.payMoney) * 10000) / 100;

    expect(app.calculateProfit()).toEqual(1050);
  });
});
