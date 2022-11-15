const MoneyInput = require("../src/MoneyInput");
const LottoNumbers = require("../src/LottoNumbers");
const ComparisonWithNumbers = require("../src/ComparisonWithNumbers");

const MissionUtils = require("@woowacourse/mission-utils");
const { PRIZE_MONEY, THOUSAND } = require("../src/Constants");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

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

describe("로또 발행 및 번호 테스트", () => {
  test("로또 발행 개수 테스트", () => {
    const userMoney = 10000;
    const moneyInput = new MoneyInput();
    moneyInput.printNumberOfTickets(userMoney);

    expect(userMoney / THOUSAND).toEqual(moneyInput.numberOfTickets);
  });

  test("로또 번호 일치 테스트", () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [1, 5, 6, 8, 11, 31],
      [1, 8, 11, 31, 41, 42],
    ]);
    mockQuestions(["1,8,6,5,11,31", "7"]);
    const logs = [
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 1개",
    ];
    const logSpy = getLogSpy();
    const lottoNumber = new LottoNumbers(4000, 4);
    lottoNumber.makeTickets();
    logs.map((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

describe("보너스 번호 테스트", () => {
  test("보너스 번호 일치 테스트", () => {
    const userBonus = 8;
    const lottoBeonus = 8;
    const isSameBonus = userBonus === lottoBeonus;
    const logs = [
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 0개",
    ];
    const logSpy = getLogSpy();
    const comparison = new ComparisonWithNumbers();
    comparison.numberOfMatchingBalls = [5, 4];
    comparison.findNumberOfWinningTickets(isSameBonus);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  // 예외 테스트
  test("보너스 번호가 1 ~ 45 사이의 숫자가 아닐 경우 예외가 발생한다.", () => {
    mockQuestions(["-1"]);
    expect(() => {
      const comparison = new ComparisonWithNumbers();
      comparison.acceptBonusNumber();
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 여러 개일 경우 예외가 발생한다.", () => {
    mockQuestions(["12, 34"]);
    expect(() => {
      const comparison = new ComparisonWithNumbers();
      comparison.acceptBonusNumber();
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 문자일 경우 예외가 발생한다.", () => {
    mockQuestions(["bonus"]);
    expect(() => {
      const comparison = new ComparisonWithNumbers();
      comparison.acceptBonusNumber();
    }).toThrow("[ERROR]");
  });
});

describe("수익 테스트", () => {
  test("총 수익 계산 테스트", () => {
    const comparison = new ComparisonWithNumbers();
    const numberOfWinningTickets = {
      5: 1,
      4: 2,
      3: 0,
      2: 0,
      1: 0,
    };
    let index = comparison.index;
    let totalPrize = 0;
    for (index; index > 0; index--) {
      totalPrize += numberOfWinningTickets[index] * PRIZE_MONEY[index];
    }
    expect(totalPrize).toEqual(PRIZE_MONEY[4] * 2 + PRIZE_MONEY[5] * 1);
  });

  test("수익률 계산 테스트", () => {
    const logSpy = getLogSpy();
    const comparison = new ComparisonWithNumbers();
    comparison.userMoney = 20000;
    const prize = 5000;
    comparison.printRateOfReturn(prize);
    const rate = ((prize / comparison.userMoney) * 100).toFixed(1);
    const addCommasToNumbers = String(rate).replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );
    const logs = [`총 수익률은 ${addCommasToNumbers}%입니다.`];
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
