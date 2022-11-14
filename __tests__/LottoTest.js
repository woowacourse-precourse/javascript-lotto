const Lotto = require("../src/Lotto");
const lotto = new Lotto();

describe("로또 클래스 테스트", () => {
  // test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
  //   expect(() => {
  //     new Lotto.howManyLotto(8000);
  //   }).toThrow("[ERROR]");
  // });

  // // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  // test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
  //   expect(() => {
  //     new Lotto([1, 2, 3, 4, 5, 5]);
  //   }).toThrow("[ERROR]");
  // });

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

  test("돈이 아닐 경우 에러 발생 테스트", () => {
    const input = 2999;

    expect(() => lotto.rightAmount(input)).toThrow();
    expect(() => lotto.rightAmount(input)).toThrow('[ERROR] 천원 단위로 입력해주세요.');
  });

  // test("가격만큼의 로또를 살 수 있어야 한다.", () => {
  //   const input = 8000;
  //   const result = lotto.rightAmount(input);

  //   expect(result).toBe(8);
  // });

  // test("가격만큼의 로또를 살 수 있어야 한다.", () => {
  //   const input = 8000;
  //   const result = lotto.howManyLotto(input);

  //   expect(result).toBe(8);
  // });
  // 아래에 추가 테스트 작성 가능
});
