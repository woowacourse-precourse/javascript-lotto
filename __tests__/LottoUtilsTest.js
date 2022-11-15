const LottoUtils = require("../src/utils/lottoUtils");
const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");
const { Random } = require("@woowacourse/mission-utils");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("lottoUtils 메서드 테스트", () => {
  test("calculateLottoCount 테스트", () => {
    const result = LottoUtils.calculateLottoCount(10000);
    expect(result).toEqual(10);
  });

  test("printLotto 테스트", () => {
    const logSpy = getLogSpy();
    const tickets = [
      new Lotto([8, 21, 23, 41, 42, 43]),
      new Lotto([3, 5, 11, 16, 32, 38]),
      new Lotto([7, 11, 16, 35, 36, 44]),
    ];

    LottoUtils.printLotto(tickets);

    expect(logSpy).toBeCalledTimes(4);
    expect(logSpy).toBeCalledWith("3개를 구매했습니다.");
    expect(logSpy).toBeCalledWith("[8, 21, 23, 41, 42, 43]");
    expect(logSpy).toBeCalledWith("[3, 5, 11, 16, 32, 38]");
    expect(logSpy).toBeCalledWith("[7, 11, 16, 35, 36, 44]");
  });

  test("createLottos 테스트", () => {
    mockRandoms([
      [1, 21, 23, 41, 42, 43],
      [3, 7, 11, 16, 32, 31],
      [7, 11, 16, 37, 36, 44],
    ]);

    const result = [
      [1, 41, 21, 23, 43, 42],
      [16, 3, 31, 7, 11, 32],
      [11, 7, 16, 37, 36, 44],
    ];
    const ticket = LottoUtils.createLottos(3);

    result.forEach((numbers) => {
      expect(ticket).toContainEqual(new Lotto(numbers));
    });
  });

  test("splitComma 테스트", () => {
    const result = LottoUtils.splitComma("1,2,3,4,5,6");
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("getLottoResult 테스트", () => {
    const tickets = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([45, 44, 43, 42, 41, 40]),
    ];

    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const result = LottoUtils.getLottoResult(
      tickets,
      winningNumbers,
      bonusNumber
    );

    expect(result).toEqual({
      FIFTH_RANK: 0,
      FOURTH_RANK: 0,
      THIRD_RANK: 0,
      SECOND_RANK: 1,
      FIRST_RANK: 1,
    });
  });

  test("getYield 테스트", () => {
    const tickets = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([45, 44, 43, 42, 41, 40]),
    ];

    const result = {
      FIFTH_RANK: 3,
      FOURTH_RANK: 0,
      THIRD_RANK: 0,
      SECOND_RANK: 0,
      FIRST_RANK: 0,
    };

    const yieldResult = LottoUtils.getYield(tickets, result);

    expect(yieldResult).toEqual("500");
  });
});
