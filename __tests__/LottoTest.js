const Lotto = require("../src/Lotto");
const Person = require("../src/Person");
const { ERROR } = require('../src/Constants');
const { SYSTEM } = require("../src/System");
const MissionUtils = require("@woowacourse/mission-utils");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
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

  // 로또 자동 작성 테스트
  test("기능 테스트: 로또 자동 오름차순 정렬", () => {
    mockRandoms([
      [3, 5, 4, 2, 1, 6],
    ])
    const lotto = SYSTEM.makeLotto();
    expect(lotto.getNumber()).toStrictEqual([1, 2, 3, 4, 5, 6]);
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

  // 수익률 계산 테스트
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
