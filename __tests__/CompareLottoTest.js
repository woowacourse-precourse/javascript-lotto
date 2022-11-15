const CompareLotto = require("../src/CompareLotto");

describe("CompareLotto 클래스 테스트", () => {
  test("몇개 당첨됐는지 검사하는 함수 테스트", () => {
    const lotto = [1,2,3,4,5,6];
    const winNumber = [1,2,3,4,5,7];

    expect(CompareLotto.count(lotto, winNumber)).toBe(5);
  });

  test("보너스 번호가 당첨됐는지 검사하는 함수 테스트", () => {
    const winNumber = [1,2,3,4,5,7];
    const bonus = 3;

    expect(CompareLotto.countBonus(winNumber, bonus)).toBe(true);
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