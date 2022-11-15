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

  test("보너스번호가 숫자로 입력되었는지 검사", () => {
    const input = "number";

    expect(Validation.itThatNumber(input)).toBe(false);
  });

  test("보너스 번호 입력값이 1 ~ 45 사이인지 검사", () => {
    const input = [1, 2, 3, 4, 5, 70];

    expect(Validation.singleNumberNet(input)).toBe(false);
  });

  test("당첨번호와 보너스번호가 중복되는지 검사", () => {
    const lotto = [1, 2, 3, 4, 5, 45];
    const bonusNumber = 1;

    expect(Validation.isThatInclude(lotto, bonusNumber)).toBe(false);
  });

//   test("천원 단위로 입력되지 않으면 에러 발생", () => {
//     const input = 2999;

//     expect(() => lotto.rightAmount(input)).toThrow();
//     expect(() => lotto.rightAmount(input)).toThrow('[ERROR] 천원 단위로 입력해주세요.');
//   });
});