const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("App 클래스 validation 테스트", () => {
  test("로또 구입 금액이 1000원 단위가 아닌 경우 에러 발생", () => {
    const app = new App();
    expect(() => {
      app.priceValidate(1200);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 한 자리가 아닌 경우 에러 발생", () => {
    const app = new App();
    expect(() => {
      app.bonusValidate("99");
    }).toThrow("[ERROR]");
  });
  // 아래에 추가 테스트 작성 가능
});

describe("App 클래스 메소드 테스트 ", () => {
  test("구매 갯수 계산 함수 테스트", () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.buyAmountCalculate(3000);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("3개를 구매했습니다.")
    );
  });

  test("로또 생성 함수 테스트", () => {
    const app = new App();
    app.buyPrice = 3000;
    app.createLottoNumber();
    expect(app.lottoArray).toHaveLength(3);
  });

  test("유저 로또 번호 sort 테스트", () => {
    const app = new App();
    app.lottoArray = [
      [1, 2, 6, 5, 4, 3],
      [6, 1, 5, 4, 3, 2],
      [4, 2, 6, 1, 5, 3],
    ];
    const testarray = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ];
    app.sortLottoNumber();

    expect(app.lottoArray).toEqual(testarray);
  });

  test("위닝 로또 번호 sort 테스트", () => {
    const app = new App();
    app.winningNumber = [1, 2, 6, 5, 4, 3];
    const testarray = [1, 2, 3, 4, 5, 6];
    app.sortWinningNumber();
    expect(app.winningNumber).toEqual(testarray);
  });

  test("일치하는 로또 번호 filter 함수 테스트", () => {
    const app = new App();
    app.lottoArray = [[1, 2, 3, 4, 5, 6]];
    app.winningNumber = [1, 2, 3];
    app.compareLottoNumber();
    expect(app.collectNumber).toHaveLength(3);
  });

  test("로또 번호 일치 갯수 증가 함수 테스트", () => {
    const app = new App();
    app.collectNumber = [1, 2, 3];
    app.bonusNumber = 4;
    const testarray = [1, 2, 3];
    app.collectLottoNumber(testarray);
    expect(app.matchNumber[0]).toBe(1);
    expect(app.matchNumber[1]).toBe(0);
    expect(app.matchNumber[2]).toBe(0);
    expect(app.matchNumber[3]).toBe(0);
    expect(app.matchNumber[4]).toBe(0);
  });

  test("winningStats 결과 함수 테스트", () => {
    const app = new App();
    const logs = [
      "당첨 통계",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 3개",
    ];
    const logSpy = getLogSpy();
    app.matchNumber[4] = 3;
    app.winningStatsResult();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("수익률 결과 함수 테스트", () => {
    const app = new App();
    const logs = ["총 수익률은 250.0%입니다."];
    const logSpy = getLogSpy();
    app.matchNumber[0] = 1;
    app.lottoArray = [[], []];
    app.yieldResult();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
