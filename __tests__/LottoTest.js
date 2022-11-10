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
      console.log(output);
      expect(app.isValidInput(output)).toEqual(isValid);
    });
  });
});
