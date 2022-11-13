const Lotto = require("../src/Lotto");
const lotto = new Lotto();

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

  test("로또 구입 후 그 개수만큼 반복문을 돌아 출력되는지 확인하기", () => {
    const result = lotto.printLotto(6);
    expect(result).toHaveLength(6);
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
});
