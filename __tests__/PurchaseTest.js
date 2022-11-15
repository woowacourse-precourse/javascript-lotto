const Purchase = require("../src/service/Purchase");
const { ERROR_MESSAGES } = require("../src/constants/constants");

// describe("구매 클래스 테스트", () => {
//   test("1. 구매 금액은 1000원 이하 10000원 이상을 넘으면 예외가 발생한다.", () => {
//     const costs = [0, 11000];
//     expect(() => {
//       costs.forEach((cost) => new Purchase(cost).validateCost(cost));
//     }).toThrow(ERROR_MESSAGES.INVALID_COST_RANGE);
//   });
//   test("2. 구매 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
//     const costs = [500, 550, 555];
//     expect(() => {
//       costs.forEach((cost) => new Purchase(cost).validateCost(cost));
//     }).toThrow(ERROR_MESSAGES.INVALID_COST_UNIT);
//   });
//   test.skip.failing(
//     "3. 발행된 로또 번호는 1~45 사이의 중복되지 않은 6자리 숫자이며, 아닐시 예외가 발생한다.",
//     expect(
//       new Purchase(1000).validateLottoNumbers(1000, [[1, 1, 3, 4, 5, 6]])
//     ).toThrow(ERROR_MESSAGES.DUPLICATED_LOTTO_NUM)
//   );
// });
