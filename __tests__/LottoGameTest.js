const MissionUtils = require("@woowacourse/mission-utils");
const LottoGame = require("../src/LottoGame");

const lottoGame = new LottoGame();

describe("로또 게임 클래스 테스트", () => {
  test("구매 금액은 숫자여야 한다.", () => {
    expect(() => {
      lottoGame.validatePurchaseLotto("1000a");
    }).toThrow("[ERROR]");
  });
  test("구매 금액은 1000원 단위여야 한다.", () => {
    expect(() => {
      lottoGame.validatePurchaseLotto("9001");
    }).toThrow("[ERROR]");
  });
  test("로또 번호는 숫자여야 한다.", () => {
    expect(() => {
      lottoGame.validateLottoNumber("a");
    }).toThrow("[ERROR]");
  });
  test("로또 번호는 1~45 사이여야 한다.", () => {
    expect(() => {
      lottoGame.validateLottoNumber("48");
    }).toThrow("[ERROR]");
  });
});

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("LottoGame", () => {
  test("수익률 출력", () => {
    const logSpy = getLogSpy();
    const payment = 7000;
    const result = {
      3: 0,
      4: 1,
      5: 0,
      "5+1": 0,
      6: 0,
    };

    lottoGame.printProfitRate(payment, result);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("714.3%"));
  });
});

MissionUtils.Console.close();
