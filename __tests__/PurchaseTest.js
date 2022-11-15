const Purchase = require("../src/service/Purchase");
const { ERROR_MESSAGES, GAME_MESSAGES } = require("../src/constants/constants");

describe("구매 클래스 테스트", () => {
  test("1. 구매 금액은 1000원 이하 10000원 이상을 넘으면 예외가 발생한다.", () => {
    const costs = [0, 11000];
    expect(() => {
      costs.forEach((cost) => new Purchase(cost).isValidCost(cost));
    }).toThrow(ERROR_MESSAGES.INVALID_COST_RANGE);
  });
  test("2. 구매 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    const costs = [500, 550, 555];
    expect(() => {
      costs.forEach((cost) => expect(new Purchase(cost).isValidCost(cost)));
    }).toThrow(ERROR_MESSAGES.INVALID_COST_UNIT);
  });
  // test("3. 발행된 로또 번호는 1~45 사이의 중복되지 않은 6자리 숫자이며, 아닐시 예외가 발생한다.", () => {
  //   const amount = 1;
  //   const purchase = new Purchase(1000);

  //   const numbers = [
  //     [[1, 1, 3, 4, 5, 6]],
  //     [[1, 3, 4, 5, 6]],
  //     [[1, 2, 3, 4, 5, 46]],
  //     [
  //       [1, 2, 3, 4, 5, 6],
  //       [7, 8, 9, 10, 11, 12],
  //     ],
  //   ];
  //   const expected = [
  //     ERROR_MESSAGES.DUPLICATED_LOTTO_NUM,
  //     ERROR_MESSAGES.INVALID_LOTTO_LENGTH,
  //     ERROR_MESSAGES.INVALID_LOTTO_RANGE,
  //     ERROR_MESSAGES.INVALID_LOTTO_AMOUNT,
  //   ];
  //   for (let i = 0; i < numbers.length; i++) {
  //     expect(() => {
  //       purchase.isValidNumber(amount, numbers[i]);
  //     }).toThrow(expected[i]);
  //   }
  // });
});
