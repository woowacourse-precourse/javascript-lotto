const MissionUtils = require("@woowacourse/mission-utils");
const Store = require("../src/Store");
const LottoAnswer = require("../src/LottoAnswer");
const Lotto = require("../src/Lotto");
const { ERROR_MESSAGE, WINMESSAGE, WINMONEY } = require("../src/Utils");

const mockReadLine = (input) => {
  MissionUtils.Console.readLine = jest.fn().mockImplementation((question, callback) => {
    callback(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("Store 클래스 테스트", () => {
  let store;
  beforeEach(() => {
    store = new Store();
  });

  test("로또 발행", () => {
    MissionUtils.Random.pickUniqueNumbersInRange = jest
      .fn()
      .mockReturnValue([4, 5, 6, 1, 2, 3]);
    store.issue();
    expect(store.candidates.map((candidate) => candidate.numbers)).toContainEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  test("1개의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      store.validateCost("");
    }).toThrow(ERROR_MESSAGE.LOTTO_COST.NAN);
    expect(() => {
      store.validateCost("1,2");
    }).toThrow(ERROR_MESSAGE.LOTTO_COST.NAN);
    expect(() => {
      store.validateCost("%");
    }).toThrow(ERROR_MESSAGE.LOTTO_COST.NAN);
  });

  test("1000원 단위로 입력되지 않으면 예외가 발생한다.", () => {
    expect(() => {
      store.validateCost(1500);
    }).toThrow(ERROR_MESSAGE.LOTTO_COST.NOT_THOUSAND);
    expect(() => {
      store.validateCost(1);
    }).toThrow(ERROR_MESSAGE.LOTTO_COST.NOT_THOUSAND);
    expect(() => {
      store.validateCost(1000.5);
    }).toThrow(ERROR_MESSAGE.LOTTO_COST.NOT_THOUSAND);
  });

  test("0 또는 음수가 입력되면 예외가 발생한다.", () => {
    expect(() => {
      store.validateCost(-1000);
    }).toThrow(ERROR_MESSAGE.LOTTO_COST.NEGATIVE);
    expect(() => {
      store.validateCost(0);
    }).toThrow(ERROR_MESSAGE.LOTTO_COST.NEGATIVE);
  });

  test("구입 금액을 입력하면 금액만큼 로또를 발행한다.", () => {
    store.printCandidates = jest.fn();
    mockReadLine(8000);
    store.buy();
    expect(store.candidates).toHaveLength(8);
  });

  test("발행된 로또를 출력한다.", () => {
    store.setAnswer = jest.fn();
    const logs = ["[1, 2, 3, 4, 5, 6]", "[4, 5, 6, 7, 8, 9]"];
    const logSpy = getLogSpy();
    store.candidates = [new Lotto([1, 2, 3, 4, 5, 6]), new Lotto([4, 5, 6, 7, 8, 9])];
    store.printCandidates();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("당첨 번호를 입력받아 예외가 발생하지 않으면 저장한다.", () => {
    store.setBonus = jest.fn();
    mockReadLine("1,2,3,4,5,6");
    store.setAnswer();
    expect(store.answer.numbers).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  test("보너스 번호를 입력받아 예외가 발생하지 않으면 저장한다.", () => {
    store.setResult = jest.fn();
    store.answer = new LottoAnswer([1, 2, 3, 4, 5, 6]);
    mockReadLine("7");
    store.setBonus();
    expect(store.answer.bonus).toBe(7);
  });

  test("발행된 로또와 정답을 비교하여 당첨 결과를 저장한다.", () => {
    store.setPrizeMoney = jest.fn();
    store.candidates = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([4, 5, 6, 7, 8, 9]),
      new Lotto([5, 6, 11, 12, 13, 14]),
    ];
    store.answer = new LottoAnswer([4, 5, 6, 7, 8, 10]);
    store.answer.bonus = 9;
    store.setResult();
    expect(store.result.get(WINMESSAGE.FIFTH)[1]).toBe(1);
    expect(store.result.get(WINMESSAGE.SECOND)[1]).toBe(1);
  });

  test("총 당첨금을 산출한다.", () => {
    store.printReport = jest.fn();
    store.result = new Map([
      [WINMESSAGE.FIFTH, [WINMONEY.FIFTH, 0]],
      [WINMESSAGE.FOURTH, [WINMONEY.FOURTH, 1]],
      [WINMESSAGE.THIRD, [WINMONEY.THIRD, 1]],
      [WINMESSAGE.SECOND, [WINMONEY.SECOND, 0]],
      [WINMESSAGE.FIRST, [WINMONEY.FIRST, 0]],
    ]);
    store.setPrizeMoney();
    expect(store.prizeMoney).toBe(1550000);
  });

  test("수익률을 산출한다.", () => {
    store.cost = 5000;
    store.prizeMoney = 5000;
    expect(store.getEarningRate()).toBe("100.0");
  });

  test("당첨 통계를 출력한다.", () => {
    const logs = [
      "당첨 통계\n---",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 100.0%입니다.",
    ];
    const logSpy = getLogSpy();
    store.cost = 10000;
    store.prizeMoney = 10000;
    store.printReport();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("종료한다.", () => {
    MissionUtils.Console.close = jest.fn();
    store.exit();
    expect(MissionUtils.Console.close).toHaveBeenCalledTimes(1);
  });
});
