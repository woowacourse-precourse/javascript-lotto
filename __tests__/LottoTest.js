const Lotto = require("../src/service/Lotto");
const { ERROR_MESSAGES } = require("../src/constants/constants");

// describe("로또 클래스 테스트", () => {
//   test("1. 입력 받은 당첨번호가 올바르지 않은 형식이면 예외가 발생한다.", () => {
//     const lotto = new Lotto([[]]);
//     expect(() => {
//       lotto.validateWinningNumber([1, 2, 3, 4, 5, 6, 7]);
//     }).toThrow(ERROR_MESSAGES.INVALID_LOTTO_LENGTH);
//     expect(() => {
//       lotto.validateWinningNumber([1, 2, 3, 4, 5, 5]);
//     }).toThrow(ERROR_MESSAGES.DUPLICATED_LOTTO_NUM);
//     expect(() => {
//       lotto.validateWinningNumber([1, 2, 3, 4, 5, 46]);
//     }).toThrow(ERROR_MESSAGES.INVALID_LOTTO_RANGE);
//     expect(() => {
//       lotto.validateWinningNumber([0, 2, 3, 4, 5, 6]);
//     }).toThrow(ERROR_MESSAGES.INVALID_LOTTO_RANGE);
//   });
//   test("2. 입력 받은 보너스 번호가 올바르지 않은 형식이면 예외가 발생한다.", () => {
//     const lotto = new Lotto([[]]);
//     const tempWinningNumber = [1, 2, 3, 4, 5, 6];
//     // 예외1) 숫자로 변환할 수 없는 문자를 포함한 경우
//     expect(() => {
//       lotto.validateBonusNumber("4,5");
//     }).toThrow(ERROR_MESSAGES.FORMAT_ERROR);
//     expect(() => {
//       lotto.validateBonusNumber("ab");
//     }).toThrow(ERROR_MESSAGES.FORMAT_ERROR);
//     // 예외2) 1~45 사이 숫자가 아닌 경우
//     expect(() => {
//       lotto.validateBonusNumber("46", tempWinningNumber);
//     }).toThrow(ERROR_MESSAGES.INVALID_LOTTO_RANGE);
//     // 예외3) 당첨번호에 이미 있는 숫자일 경우
//     expect(() => {
//       lotto.validateBonusNumber("5", tempWinningNumber);
//     }).toThrow(ERROR_MESSAGES.DUPLICATED_LOTTO_NUM);
//   });
//   test("3. 입력 받은 당첨 번호와 보너스 번호를 올바르게 취합한다.", () => {
//     const lotto = new Lotto([[]]);

//     expect(lotto.setUserInput([1, 2, 3, 4, 5, 6], 7)).toEqual({
//       winningNumber: [1, 2, 3, 4, 5, 6],
//       bonusNumber: 7,
//     });
//   });
//   test("4. 로또 번호와 당첨 번호, 보너스 번호를 비교하여 계산한다.", () => {
//     const tempCost = 1000;
//     const userInput = { winningNumber: [1, 2, 3, 4, 5, 6], bonusNumber: 7 };
//     const lottoNum = [
//       [1, 2, 3, 10, 11, 12],
//       [4, 5, 6, 10, 11, 12],
//       [1, 2, 3, 4, 11, 12],
//       [1, 2, 3, 4, 5, 8],
//       [1, 2, 3, 4, 5, 7],
//       [1, 2, 3, 4, 5, 6],
//     ];
//     const expected = [2, 1, 1, 1, 1];

//     expect(new Lotto(tempCost, lottoNum).calculateResult(userInput)).toEqual(
//       expect.objectContaining({
//         fifth: expected[0],
//         fourth: expected[1],
//         third: expected[2],
//         second: expected[3],
//         first: expected[4],
//       })
//     );
//   });
//   test("5. 로또 구입 금액과 당첨액을 비교하여 수익률을 계산한다.(단, 수익률은 소숫점 둘째 자리에서 반올림한다.)", () => {
//     const tempCost = 30000;
//     const result = [
//       { fifth: 1, fourth: 0, third: 0, second: 0, first: 0 },
//       { fifth: 0, fourth: 0, third: 1, second: 0, first: 0 },
//       { fifth: 0, fourth: 0, third: 0, second: 0, first: 1 },
//       { fifth: 0, fourth: 1, third: 0, second: 1, first: 0 },
//     ];
//     const expected = [16.7, 5000, 6666666.7, 100166.7];

//     for (let i = 0; i < result.length; i++) {
//       expect(
//         new Lotto(tempCost, [[]]).calculateRateOfReturn(result[i], tempCost)
//       ).toBe(expected[i]);
//     }
//   });
// });
