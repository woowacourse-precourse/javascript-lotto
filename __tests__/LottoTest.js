const App = require("../src/App");
const Lotto = require("../src/Lotto");
const lotto = new Lotto();
const app = new App();

describe("로또 클래스 테스트", () => {
  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 금액이 1000단위가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      lotto.checkAmount(1500);
    }).toThrow("[ERROR]");
  });

  test("로또 구입 개수 확인하기", () => {
    const result = lotto.purchaseLotto(10000);
    expect(result).toBe(10);
  });

  test("오름차순 정렬이 맞는지 확인하기", () => {
    const input = [1, 4, 10, 35, 43, 45];
    const result = lotto.sortArray(input);
    expect(result).toEqual(input);
  });

  test("뒤섞여있는 배열을 오름차순 정렬", () => {
    const input = [1, 30, 41, 25, 11, 9];
    const result = lotto.sortArray(input);
    expect(result).toEqual([1, 9, 11, 25, 30, 41]);
  });

  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      lotto.validate([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      lotto.duplicate([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1 ~ 45 사이의 숫자인지 확인한다.", () => {
    expect(() => {
      lotto.inrangeNumber([1, 4, 10, 40, 33, 47]);
    }).toThrow("[ERROR]");
  });
});
