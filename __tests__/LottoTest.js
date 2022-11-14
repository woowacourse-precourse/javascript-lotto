const App = require("../src/App");
const Lotto = require("../src/Lotto");
const Person = require("../src/Person");
const { ERROR } = require('../src/Constants');
const { SYSTEM } = require("../src/System");
const MissionUtils = require("@woowacourse/mission-utils");

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
  // 테스트 추가
  // 로또 자동 작성 테스트
  test("기능 테스트: 로또 자동 오름차순 정렬", () => {
    mockRandoms([
      [3, 5, 4, 2, 1, 6],
    ])
    const lotto = SYSTEM.makeLotto();
    expect(lotto.getNumber()).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  test("예외 테스트: 현금이 1,000원으로 나누어 떨어지지 않는 경우 1", () => {
    expect(() => {
      const person = new Person();
      person.isCorrectCash("1234");
    }).toThrow(ERROR.INVAID_CASH);
  });

  test("예외 테스트: 현금이 1,000원으로 나누어 떨어지지 않는 경우 2", () => {
    expect(() => {
      const person = new Person();
      person.isCorrectCash("123");
    }).toThrow(ERROR.INVAID_CASH);
  });

  test("예외 테스트: 현금 값이 0인 경우", () => {
    expect(() => {
      const person = new Person();
      person.isCorrectCash("0");
    }).toThrow(ERROR.CASH_IS_ZERO);
  });

  test("예외 테스트: 현금 값이 음수인 경우", () => {
    expect(() => {
      const person = new Person();
      person.isCorrectCash("-1");
    }).toThrow(ERROR.CASH_IS_NOT_NATURAL_NUMBER);
  });

  // 로또 번호 예외 테스트 
  test("예외 테스트: 1~45 사이가 아닌 숫자가 로또 번호에 포함된 경우 1", () => {
    expect(() => {
      new Lotto("0, 2, 3, 4, 5, 6".split(",").map(Number))
    }).toThrow(ERROR.INVAID_NUMBER);
  });

  test("예외 테스트: 1~45 사이가 아닌 숫자가 당첨 로또 번호에 포함된 경우 2", () => {
    expect(() => {
      new Lotto('1, 2, 3, 4, 5, 46'.split(",").map(Number))
    }).toThrow(ERROR.INVAID_NUMBER);
  });

  test("예외 테스트: 중복된 숫자가 당첨 로또 번호에 포함된 경우", () => {
    expect(() => {
      new Lotto('1, 1, 2, 3, 4, 5'.split(",").map(Number))
    }).toThrow(ERROR.NOT_UNIQUE);

  });

  test("예외 테스트: 당첨 로또 번호에 숫자가 아닌 값이 포함된 경우", () => {
    expect(() => {
      new Lotto("1, two, 3, 4, 5, six".split(",").map(Number))
    }).toThrow(ERROR.NOT_NUMBER);
  });

  test("예외 테스트: 당첨 로또 번호에 특수 문자가 포함된 경우", () => {
    expect(() => {
      new Lotto("1, _, 3, 4, 5, 6".split(",").map(Number))
    }).toThrow(ERROR.NOT_NUMBER);
  });

  // 보너스 숫자 입력 기능 테스트
  test("기능 테스트: 보너스 숫자 입력", () => {
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
    ]);
    expect(() => {
      const bonusNumber = 1;
      const winningLotto = SYSTEM.makeLotto();
      SYSTEM.isCorrectBonusNumber(bonusNumber, winningLotto.getNumber());
    }).not.toThrow(ERROR.INVAID_NUMBER);
  });

  test("예외 테스트: 보너스 숫자가 1~45 사이의 숫자가 아닌 경우 1", () => {
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
    ]);
    expect(() => {
      const bonusNumber = Number('0');
      const winningLotto = SYSTEM.makeLotto();
      SYSTEM.isCorrectBonusNumber(bonusNumber, winningLotto.getNumber());
    }).toThrow(ERROR.INVAID_NUMBER);
  });

  test("예외 테스트: 보너스 숫자가 1~45 사이의 숫자가 아닌 경우 2", () => {
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
    ]);
    expect(() => {
      const bonusNumber = Number('46');
      const winningLotto = SYSTEM.makeLotto();
      SYSTEM.isCorrectBonusNumber(bonusNumber, winningLotto.getNumber());
    }).toThrow(ERROR.INVAID_NUMBER);
  });

  test("예외 테스트: 보너스 숫자가 당첨 숫자와 중복될 경우", () => {
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
    ]);

    expect(() => {
      const bonusNumber = Number('1');
      const winningLotto = SYSTEM.makeLotto();
      SYSTEM.isCorrectBonusNumber(bonusNumber, winningLotto.getNumber());
    }).toThrow(ERROR.HAS_NUMBER);
  });

  test("예외 테스트: 보너스 숫자 입력값이 숫자가 아닌 경우", () => {
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
    ]);

    expect(() => {
      const bonusNumber = Number('zero');
      const winningLotto = SYSTEM.makeLotto();
      SYSTEM.isCorrectBonusNumber(bonusNumber, winningLotto.getNumber());
    }).toThrow(ERROR.NOT_NUMBER);
  });

  // 개별 로또의 등수를 생성하여 반환 기능 테스트
  test("기능테스트: 로또 1등 인덱스 반환 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningLotto = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    expect(SYSTEM.compare(lotto.getNumber(), new Set(winningLotto), bonusNumber)).toBe(0);
  });

  test("기능테스트: 로또 2등 인덱스 반환  테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
    const winningLotto = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    expect(SYSTEM.compare(lotto.getNumber(), new Set(winningLotto), bonusNumber)).toBe(1);
  });

  test("기능테스트: 로또 3등 인덱스 반환 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 8]);
    const winningLotto = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    expect(SYSTEM.compare(lotto.getNumber(), new Set(winningLotto), bonusNumber)).toBe(2);
  });


  test("기능테스트: 로또 4등 인덱스 반환 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 8, 9]);
    const winningLotto = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    expect(SYSTEM.compare(lotto.getNumber(), new Set(winningLotto), bonusNumber)).toBe(3);
  });


  test("기능테스트: 로또 5등 인덱스 반환 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 8, 9, 10]);
    const winningLotto = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    expect(SYSTEM.compare(lotto.getNumber(), new Set(winningLotto), bonusNumber)).toBe(4);
  });

  test("기능테스트: 로또 6등 인덱스 반환 테스트", () => {
    const lotto = new Lotto([1, 2, 8, 9, 10, 11]);
    const winningLotto = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    expect(SYSTEM.compare(lotto.getNumber(), new Set(winningLotto), bonusNumber)).toBe(5);
  });

  test("기능테스트: 로또 7등 인덱스 반환 테스트", () => {
    const lotto = new Lotto([1, 8, 9, 10, 11, 12]);
    const winningLotto = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    expect(SYSTEM.compare(lotto.getNumber(), new Set(winningLotto), bonusNumber)).toBe(6);
  });

  test("기능테스트: 로또 8등 인덱스 반환 테스트", () => {
    const lotto = new Lotto([8, 9, 10, 11, 12, 13]);
    const winningLotto = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    expect(SYSTEM.compare(lotto.getNumber(), new Set(winningLotto), bonusNumber)).toBe(7);
  });

  test("기능테스트: 수익률 계산 1", () => {
    const results = [0, 0, 0, 0, 1];
    const cash = "5000";

    expect(SYSTEM.calulateRate(cash, results)).toBe(100);
  });

  test("기능테스트: 수익률 계산 2", () => {
    const results = [0, 0, 0, 0, 1];
    const cash = "3000";

    expect(SYSTEM.calulateRate(cash, results)).toBe(166.7);
  });

  test("기능테스트: 수익률 계산 3", () => {
    const results = [1, 1, 1, 1, 1];
    const cash = "5000";

    expect(SYSTEM.calulateRate(cash, results)).toBe(40631100);
  });


});
