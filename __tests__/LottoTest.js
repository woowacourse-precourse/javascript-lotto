const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");

afterAll(() => {
  MissionUtils.Console.close();
});

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생합니다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]).validate();
    }).toThrow("[ERROR]");
  });

  test("로또 번호의 개수가 6개 미만일 경우 예외가 발생합니다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]).validate();
    }).toThrow("[ERROR]");
    expect(() => {
      new Lotto([1]).validate();
    }).toThrow("[ERROR]");
    expect(() => {
      new Lotto([]).validate();
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생합니다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]).validate();
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 숫자가 아닌 문자가 있으면 예외가 발생합니다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'a']).validate();
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 적절하지 않은 숫자가 있으면 예외가 발생합니다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]).validate();
    }).toThrow("[ERROR]");
    expect(() => {
      new Lotto([1, 2, 0, 4, 5, 6]).validate();
    }).toThrow("[ERROR]");
    expect(() => {
      new Lotto([-15, 2, 3, 4, 5, 46]).validate();
    }).toThrow("[ERROR]");
  });
});

const lotto = new Lotto();

describe("로또 클래스 내부 메서드 (validateBonusNumber(winningNumbers, bonusNumbers))", () => {
  test("보너스 번호가 유효하지 않다면 예외가 발생합니다.", () => {
    expect(() => {
      lotto.validateBonusNumber([5, 7, 8, 9, 10, 14], 46);
    }).toThrow();
    expect(() => {
      lotto.validateBonusNumber([5, 7, 8, 9, 10, 14], 0);
    }).toThrow();
    expect(() => {
      lotto.validateBonusNumber([5, 7, 8, 9, 10, 14], -5);
    }).toThrow();
    expect(() => {
      lotto.validateBonusNumber([5, 7, 8, 9, 10, 14], 'a');
    }).toThrow();
  })

  test("보너스 번호가 로또 번호와 중복된다면 예외가 발생합니다.", () => {
    expect(() => {
      lotto.validateBonusNumber(['1', '2', '3', '4', '5', '6'], '6');
    }).toThrow();
  })
});
