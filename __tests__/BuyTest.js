const Buy = require("../src/Buy");
const MissionUtils = require("@woowacourse/mission-utils");

describe("로또 구매 기능", () => {
  let buy;
  beforeEach(() => {
    buy = new Buy();
  });

  const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
  };

  test("로또 구입 금액에 대한 구입 로또 개수 테스트", () => {
    const purchase = [5000, 4000, 7000, 8000, 6000];
    const result = [5, 4, 7, 8, 6];
    // function callback(index) {
    //   if (error) throw error;
    //   expect(data).toBe(result[index]);
    // }
    purchase.forEach((amount, index) => {
      expect(buy.lottoCount(amount)).toBe(result[index]);
    });
  });
});
