const Purchase = require("../src/Purchase");
const { ERROR_MESSAGES, GAME_MESSAGES } = require("../src/constants");

describe("구매 클래스 테스트", () => {
  test("구매 금액은 1000원 이하 10000원 이상을 넘으면 오류를 반환한다.", () => {
    expect(() => {
      const costs = [0, 11000];

      costs.forEach((cost) => new Purchase(cost).isValidCost(cost));
    }).toThrow(ERROR_MESSAGES.INVALID_COST_RANGE);
  });
  test("구매 금액이 1000원 단위가 아니면 오류를 반환한다.", () => {
    expect(() => {
      const costs = [500, 550, 555];
      costs.forEach((cost) => expect(new Purchase(cost).isValidCost(cost)));
    }).toThrow(ERROR_MESSAGES.INVALID_COST_UNIT);
  });

  // test("구매 로또양을 구매 금액에 맞게 반환한다.", () => {
  //   const costs = [1000, 8000, 10000];
  //   const amountOfLotto = [1, 8, 10];

  //   for (let i = 0; i < costs.length; i++) {
  //     expect(new Purchase(costs[i]).purchaseLotto(costs[i])).toBe(
  //       amountOfLotto[i]
  //     );
  //   }
  // });

  // test("구매한 로또의 각 번호는 1~45 사이의 숫자가 아니라면 예외가 발생한다", () => {
  //   const purchase = new Purchase(2000);
  //   const inputs = [0, 46];

  //   // expect(() => {
  //   //   inputs.forEach((input) => purchase.isInValidRange(input));
  //   // }).toThrow(ERROR_MESSAGES.INVALID_LOTTO_RANGE);
  //   expect(new Purchase(2000).isInValidRange(-1)).toThrow(
  //     ERROR_MESSAGES.INVALID_LOTTO_RANGE
  //   );
  // });

  // test("구매한 로또의 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
  //   expect(() => {
  //     const tempCost = 2000;
  //     const inputs = [[1, 2, 3, 4, 5, 6, 7]];

  //     inputs.forEach((input) =>
  //       expect(new Purchase(tempCost).isValidNumber(input)).toThrow(
  //         ERROR_MESSAGES.INVALID_LOTTO_LENGTH
  //       )
  //     );
  //   });
  // });

  // test("구매한 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
  //   expect(() => {
  //     const tempCost = 2000;
  //     const inputs = [[1, 2, 3, 4, 5, 5]];

  //     inputs.forEach((input) =>
  //       expect(new Purchase(tempCost).isValidNumber(input)).toThrow(
  //         ERROR_MESSAGES.DUPLICATED_LOTTO_NUM
  //       )
  //     );
  //   });
  // });

  // // test("구매한 로또의 번호는 오름차순(작은수부터 정렬)으로 생성된다.", () => {});

  // test("구입한 로또의 수량 및 각 로또의 번호를 출력한다.", () => {
  //   expect(() => {
  //     const tempCost = 2000;
  //     const tempAmount = 2;

  //     inputs.forEach((input) =>
  //       expect(
  //         new Purchase(tempCost)
  //           .printResult()
  //           .toBe(GAME_MESSAGES.RETURN_PURCHASED_AMOUNT(tempAmount))
  //       )
  //     );
  //   });
  // });
});
