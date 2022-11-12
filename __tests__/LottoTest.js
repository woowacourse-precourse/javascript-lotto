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

  test("1000원으로 나눴을때 나머지가 있으면 예외가 발생한다.", () => {
    const app = new App();
    const number = ["1400", "50", "", "한글", "10005", "900", "나1000"];
    const isValid = false;

    number.forEach((output) => {
      expect(app.isValidInput(output)).toEqual(isValid);
    });
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

  // test("로또 발행하기", () => {
  //   const app = new App();
  //   const number = 6;
  //   const result = app.publishLotto(number);

  //   expect(result).toContain();
  // });
});
