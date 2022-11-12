const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");

afterAll(() => {
  MissionUtils.Console.close();
});

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
});

const lotto = new Lotto();

describe("validate()", () => {
  test("적절한 로또 번호 배열일 경우 true를 반환해야합니다.", () => {
    expect(lotto.validate([1, 2, 3, 4, 5, 6])).toBeTruthy();
    expect(lotto.validate([1, 20, 31, 41, 42, 43])).toBeTruthy();
    expect(lotto.validate([12, 15, 20, 23, 28, 40])).toBeTruthy();
  });

  test("적절하지 않은 배열일 경우, 에러를 발생해야 합니다. (유효하지 않은 길이)", () => {
    expect(() => {
      lotto.validate([1, 2, 3, 4, 5]);
    }).toThrow();
    expect(() => {
      lotto.validate([1, 2, 3, 4, 5]);
    }).toThrow();
    expect(() => {
      lotto.validate([]);
    }).toThrow();
  })

  test("적절하지 않은 배열일 경우, 에러를 발생해야 합니다. (졍렬되지 않은 상태)", () => {
    expect(() => {
      lotto.validate([15, 7, 3, 2, 10, 14]);
    }).toThrow();
    expect(() => {
      lotto.validate([9, 5, 6, 23, 45, 11]);
    }).toThrow();
  })

  test("적절하지 않은 배열일 경우, 에러를 발생해야 합니다. (중복되는 요소가 존재하는 경우)", () => {
    expect(() => {
      lotto.validate([1, 2, 3, 3, 4, 5]);
    }).toThrow();
  })
});
