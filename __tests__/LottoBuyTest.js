const LottoBuy = require("../src/LottoBuy");
const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("로또 구매 테스트", () => {
  test("1000원으로 떨어지지 않는 가격이 나오면 예외가 발생", () => {
    expect(() => {
      new LottoBuy().validate(121212);
    }).toThrow("[ERROR]");
    expect(() => {
      new LottoBuy().validate(1002);
    }).toThrow("[ERROR]");
  });

  test("로또 발행 테스트", () => {
    const logSpy = getLogSpy();
    new LottoBuy().inputPurchasePrice(8000);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("8개를 구매했습니다.")
    );

    expect(logSpy).toHaveBeenCalledTimes(9);
  });
});
