const Lotto = require("../src/Lotto");
const lotto = new Lotto();

describe("로또 클래스 테스트", () => {
  test("가격만큼의 로또를 살 수 있는지 테스트", () => {
    const input = 8000;
    const result = lotto.howManyLotto(input);

    expect(result).toBe(8);
  });

  test("배열 정렬 테스트", () => {
    const input = [5, 4, 3, 2, 1, 7];
    const result = lotto.sortLottoNumber(input);

    expect(result).toStrictEqual([1, 2, 3, 4, 5, 7]);
  });

  test("돈이 아닐 경우 에러 발생 테스트", () => {
    const input = "money";

    expect(() => lotto.NumberPackage(input)).toThrow();
    expect(() => lotto.NumberPackage(input)).toThrow('[ERROR] 돈이 아닙니다.');
  });

  test("천원 단위로 입력되지 않으면 에러 발생", () => {
    const input = 2999;

    expect(() => lotto.rightAmount(input)).toThrow();
    expect(() => lotto.rightAmount(input)).toThrow('[ERROR] 천원 단위로 입력해주세요.');
  });
});
