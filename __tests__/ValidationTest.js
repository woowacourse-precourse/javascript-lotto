const Validation = require("../src/Validation");

describe("Validation 클래스 테스트", () => {
  test("당첨 번호 입력값이 6개인지 검사", () => {
    const input = [1, 2, 3, 4, 5];

    expect(Validation.isThatSix(input)).toBe(false);
  });

  test("당첨 번호 입력값이 중복되는지 검사", () => {
    const input = [1, 2, 3, 4, 5, 5];

    expect(Validation.isThatDuplicate(input)).toBe(true);
  });

  test("당첨번호가 올바른 형식으로 입력되었는지 검사", () => {
    const input = [1/2/3/4/5/6];

    expect(Validation.itThatRightFormat(input)).toBe(false);
  });

  test("당첨 번호 입력값이 1 ~ 45 사이인지 검사", () => {
    const input = [1, 2, 3, 4, 5, 70];

    expect(Validation.numberNet(input)).toBe(true);
  });

  test("당첨 번호 입력값이 6개인지 검사", () => {
    const input = [];

    expect(Validation.isThatEmpty(input)).toBe(true);
  });

//   test("배열 정렬 테스트", () => {
//     const input = [5, 4, 3, 2, 1, 7];
//     const result = lotto.sortLottoNumber(input);

//     expect(result).toStrictEqual([1, 2, 3, 4, 5, 7]);
//   });

//   test("돈이 아닐 경우 에러 발생 테스트", () => {
//     const input = "money";

//     expect(() => lotto.NumberPackage(input)).toThrow();
//     expect(() => lotto.NumberPackage(input)).toThrow('[ERROR] 돈이 아닙니다.');
//   });

//   test("천원 단위로 입력되지 않으면 에러 발생", () => {
//     const input = 2999;

//     expect(() => lotto.rightAmount(input)).toThrow();
//     expect(() => lotto.rightAmount(input)).toThrow('[ERROR] 천원 단위로 입력해주세요.');
//   });
});