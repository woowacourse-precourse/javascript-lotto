const Lotto = require("../src/Lotto");

const mocksRef = { current: null };

const mockTargetReturnValue = (mockTarget, testCase) => {
  mockTarget = jest.fn();
  mocksRef.current = mockTarget;
  const testCaseArr = Object.values(testCase);
  testCaseArr.forEach((testCase) => {
    return mockTarget.mockReturnValueOnce(testCase);
  });
};

const restoreMocks = () => {
  if (!mocksRef.current) return;
  mocks.current.mockRestore();
  mocksRef.current = null;
};

const testCase_1 = {
  "1-1": { w: [1, 2, 3, 4, 5, 6, 7], b: 2 },
  "1-2": { w: [1, 1, 2, 3, 4, 5], b: 6 },
  "1-3": { w: [0, 1, 2, 3, 4, 5], b: 6 },
  "1-4": { w: [7, 6, 5, 4, 3, 2], b: 1 },
  "1-5": { w: [1, 2, 3, 4, 5, 6], b: 7 },
};

describe("1. 로또 번호 생성 및 확인 테스트", () => {
  restoreMocks();
  mockTargetReturnValue(Lotto.createNumber, testCase_1);

  test("1-1 로또 번호의 개수가 6개가 넘어가면 예외 발생.", () => {
    expect(() => {
      new Lotto();
    }).toThrow("[ERROR]");
  });
  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("1-2 로또 번호에 중복된 숫자가 있으면 예외 발생.", () => {
    expect(() => {
      new Lotto();
    }).toThrow("[ERROR]");
  });
  test("1-3 로또 번호에 1~45가 아닌 숫자가 있으면 얘외 발생.", () => {
    expect(() => {
      new Lotto();
    }).toThrow("[ERROR]");
  });
  test("1-4 로또 번호가 순서대로 정렬되어 있지 않으면 예외 발생.", () => {
    expect(() => {
      new Lotto();
    }).toThrow("[ERROR]");
  });
  test("1-5 로또 번호가 정확히 입력된 경우 통과", () => {
    expect(new Lotto()).toBeDefined();
  });
});

const testCase_2 = {
  "2-1": { w: [2, 2, 3, 4, 5, 6, 7], b: 2 },
  "2-2": { w: [1, 1, 2, 3, 4, 5], b: 6 },
  "2-3": { w: [0, 1, 2, 3, 4, 5], b: 6 },
};

describe("2. 당첨번호 유효 테스트", () => {
  restoreMocks();
  mockTargetReturnValue(Lotto.createNumber, testCase_2);

  test("2-1 당첨번호로 입력된 값이 [1. 로또 번호 확인 테스트]를 통과하지 못할 시 예외 발생", () => {
    expect(() => {
      Lotto.validate(Lotto.createNumber());
    }).toThrow("[ERROR]");
  });
  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("2-2 보너스번호로 입력된 값이 1~45가 아닌 숫자가 있으면 얘외 발생.", () => {
    expect(() => {
      Lotto.validate(Lotto.createNumber());
    }).toThrow("[ERROR]");
  });
  test("2-3 보너스번호로 입력된 값이 당첨번호와 중복될 시 예외 발생.", () => {
    expect(() => {
      Lotto().validate(Lotto.createNumber());
    }).toThrow("[ERROR]");
  });
});

const testCase_3 = {
  "3-1": { w: [7, 6, 5, 4, 3, 2], b: 1 },
  "3-2": { w: [1, 2, 3, 4, 5, 6], b: 7 },
  "3-3": { w: [1, 2, 3, 4, 5, 6], b: 7 },
};

describe("3. 당첨번호 + 보너스번호 와 로또번호 체크 테스트", () => {
  restoreMocks();
  mockTargetReturnValue(Lotto.createNumber, testCase_3);

  test("3-1 당첨번호와 로또번호가 일치하는 갯수를 다르게 체크할 시 예외 발생.", () => {
    expect(() => {
      new Lotto().winningConfrim(Lotto.createNumber());
    }).toThrow("[ERROR]");
  });
  test("3-2 보너스번호가 일치하는 경우를 다르게 표시하지 않을 시 예외 발생.", () => {
    expect(() => {
      new Lotto().winningConfrim(Lotto.createNumber());
    }).toThrow("[ERROR]");
  });
  test("3-3 당첨번호 + 보너스번호와 로또번호 비교 정확히 했을 시 통과", () => {
    expect(() => {
      new Lotto().winningConfrim(Lotto.createNumber());
    }).toBeDefined();
  });
});
