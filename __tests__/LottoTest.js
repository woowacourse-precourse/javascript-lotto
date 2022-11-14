const MissionUtils = require("@woowacourse/mission-utils");
const { PRICE_OF_ONE_LOTTO } = require("../src/constants");
const Lotto = require("../src/Lotto");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
  test('매개변수로 n을 받고 콘솔에 "n개를 구매했습니다." 출력한다.', () => {
    const logSpy = getLogSpy();
    const N = 5;
    const ALERT_MESSAGE = `${N}개를 구매했습니다.`;
    Lotto.alertHowManyBought(N);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(ALERT_MESSAGE));
  });

  test("구입한 번호 중 당첨 번호의 갯수와 보너스 숫자의 일치 여부를 반환", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    const purchasedNumbers = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 7, 8, 9],
      [4, 6, 34, 12, 23, 44],
    ];

    const expectResult = [
      { count: 6, bonus: false },
      { count: 3, bonus: false },
      { count: 2, bonus: false },
    ];

    const matchedCount = purchasedNumbers.map((purchasedNumber) =>
      lotto.getMatchedCount(purchasedNumber)
    );

    matchedCount.forEach((matchNumber, index) =>
      expect(matchNumber).toEqual(expectResult[index])
    );
  });

  test("구입한 번호 중 당첨 번호의 갯수를 반환", () => {
    const BONUS_NUMBER = 7;

    const purchasedNumbers = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 7, 8, 9],
      [6, 5, 4, 3, 10, 11],
    ];

    const lotto = new Lotto([1, 2, 3, 4, 5, 6], purchasedNumbers, BONUS_NUMBER);

    const statistics = {
      match3: 1,
      match4: 1,
      match5: 0,
      match5andBonus: 0,
      match6: 1,
    };

    const winStatistics = lotto.getWinStatistics(purchasedNumbers);

    expect(winStatistics).toEqual(statistics);
  });

  test("복권 구매", () => {
    const MONEY = 5000;
    const BOUGHT_COUNT = MONEY / PRICE_OF_ONE_LOTTO;

    const boughtLotto = Lotto.buy(MONEY);

    expect(boughtLotto.length).toEqual(BOUGHT_COUNT);
  });
});
