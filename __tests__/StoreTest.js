const MissionUtils = require("@woowacourse/mission-utils");
const Store = require("../src/Store");
const { WINMESSAGE, LottoAnswer } = require("../src/LottoAnswer");
const Lotto = require("../src/Lotto");

const mockReadLine = (input) => {
  MissionUtils.Console.readLine = jest
    .fn()
    .mockImplementation((question, callback) => {
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
    expect(
      store.candidates.map((candidate) => candidate.numbers)
    ).toContainEqual([1, 2, 3, 4, 5, 6]);
  });

  test("1개의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      store.validatePrice("");
    }).toThrow("[ERROR] 숫자를 입력해 주세요.");
    expect(() => {
      store.validatePrice("1,2");
    }).toThrow("[ERROR] 숫자를 입력해 주세요.");
    expect(() => {
      store.validatePrice("%");
    }).toThrow("[ERROR] 숫자를 입력해 주세요.");
  });

  test("1000원 단위로 입력되지 않으면 예외가 발생한다.", () => {
    expect(() => {
      store.validatePrice(1500);
    }).toThrow("[ERROR] 1000원 단위로 입력해 주세요.");
    expect(() => {
      store.validatePrice(1);
    }).toThrow("[ERROR] 1000원 단위로 입력해 주세요.");
    expect(() => {
      store.validatePrice(1000.5);
    }).toThrow("[ERROR] 1000원 단위로 입력해 주세요.");
  });

  test("0 또는 음수가 입력되면 예외가 발생한다.", () => {
    expect(() => {
      store.validatePrice(-1000);
    }).toThrow("[ERROR] 양의 정수를 입력해 주세요.");
    expect(() => {
      store.validatePrice(0);
    }).toThrow("[ERROR] 양의 정수를 입력해 주세요.");
  });

  test("구입 금액을 입력하면 금액만큼 로또를 발행한다.", () => {
    store.printCandidates = jest.fn();
    mockReadLine(8000);
    store.buy();
    expect(store.candidates).toHaveLength(8);
  });

  test("발행된 로또를 출력한다.", () => {
    store.setAnswer = jest.fn();
    const testCandidates = [
      [1, 2, 3, 4, 5, 6],
      [4, 5, 6, 7, 8, 9],
    ];
    const logSpy = getLogSpy();
    testCandidates.forEach((candidate) =>
      store.candidates.push(new Lotto(candidate))
    );
    store.printCandidates();
    testCandidates.forEach((candidate) => {
      expect(logSpy).toHaveBeenCalledWith(candidate);
    });
  });

  test("당첨 번호를 입력받아 예외가 발생하지 않으면 저장한다.", () => {
    store.setBonus = jest.fn();
    mockReadLine("1,2,3,4,5,6");
    store.setAnswer();
    expect(store.answer.numbers).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  test("보너스 번호를 입력받아 예외가 발생하지 않으면 저장한다.", () => {
    store.answer = new LottoAnswer([1, 2, 3, 4, 5, 6]);
    mockReadLine("7");
    store.setBonus();
    expect(store.answer.bonus).toBe(7);
  });
});
