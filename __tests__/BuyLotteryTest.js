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
      [18, 41, 9, 22, 26, 39],
      [7, 32, 8, 3, 9, 40],
      [43, 23, 42, 13, 33, 7],
      [36, 3, 38, 41, 30, 35],
      [12, 22, 23, 45, 18, 19],
    ]);

    expect(buyLottery.buy(5000)).toEqual({
      quentity: 5,
      lottos: [
        [18, 41, 9, 22, 26, 39],
        [7, 32, 8, 3, 9, 40],
        [43, 23, 42, 13, 33, 7],
        [36, 3, 38, 41, 30, 35],
        [12, 22, 23, 45, 18, 19],
      ],
    });
  });
  test("예외 - 1000단이로 나누어 떨어질때", () => {
    const buyLottery = new BuyLottery();

    expect(() => buyLottery.checkAmout(1000)).not.toThrow("[ERROR]");
  });
  test("예외 - 1000단이로 나누어 떨어지지 않을때", () => {
    const buyLottery = new BuyLottery();

    expect(() => buyLottery.checkAmout(1001)).toThrow("[ERROR]");
  });
  test("금액으로 살 수 있는 로또 수량", () => {
    const buyLottery = new BuyLottery();

    expect(buyLottery.numberOfpurchases(1000)).toBe(1);
  });
  test("금액에 맞는 로또발행", () => {
    const buyLottery = new BuyLottery();
    const lottoNumber = buyLottery.createRendomLotto(5).length;
    expect(lottoNumber).toBe(5);
  });
});
