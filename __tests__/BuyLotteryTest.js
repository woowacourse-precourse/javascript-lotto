const BuyLottery = require("../src/BuyLottery");
const MissionUtils = require("@woowacourse/mission-utils");
const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};
describe("로또 구입 테스트", () => {
  test("로또 구입", () => {
    const buyLottery = new BuyLottery();
    mockRandoms([
      [9, 18, 22, 26, 39, 41],
      [3, 7, 8, 9, 32, 40],
      [7, 13, 23, 33, 42, 43],
      [3, 30, 35, 36, 38, 41],
      [12, 18, 19, 22, 23, 45],
    ]);

    expect(buyLottery.buy(5000)).toEqual({
      quentity: 5,
      lottos: [
        [9, 18, 22, 26, 39, 41],
        [3, 7, 8, 9, 32, 40],
        [7, 13, 23, 33, 42, 43],
        [3, 30, 35, 36, 38, 41],
        [12, 18, 19, 22, 23, 45],
      ],
    });
  });
  test("예외 - 1000단위로 나누어 떨어질때", () => {
    const buyLottery = new BuyLottery();

    expect(() => buyLottery.checkAmout(1000)).not.toThrow("[ERROR]");
  });
  test("예외 - 1000단위로 나누어 떨어지지 않을때", () => {
    const buyLottery = new BuyLottery();

    expect(() => buyLottery.checkAmout(1001)).toThrow("[ERROR]");
  });
  test("금액으로 살 수 있는 로또 수량", () => {
    const buyLottery = new BuyLottery();

    expect(buyLottery.numberOfpurchases(1000)).toBe(1);
  });
});
