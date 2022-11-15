const MissionUtils = require("@woowacourse/mission-utils");

const Lotto = require("../src/Lotto");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("로또 클래스 예외 테스트", () => {
  const lottoSystem = new Lotto();

  test("로또 번호의 개수가 6개가 아니면 예외가 발생한다.", () => {
    expect(() =>
      lottoSystem.validateWinningNumbersCount([1, 2, 3, 4, 5, 6, 7])
    ).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() =>
      lottoSystem.validateWinningNumbersUniqueness([1, 2, 3, 4, 6, 6])
    ).toThrow("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
  });

  test("로또 번호가 1부터 45 사이가 아니면 예외가 발생한다.", () => {
    expect(() =>
      lottoSystem.validateWinningNumbersRange([1, 2, 3, 4, 48, 6])
    ).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  });
});

describe("로또 클래스 기능 테스트", () => {
  const lottoSystem = new Lotto();
  mockQuestions(["1,2,3,4,5,6", "7"]);

  test("당첨 번호 6개를 입력하는 테스트", () => {
    lottoSystem.setWinningNumbers();

    expect(lottoSystem.getWinningNumbers().length).toBe(6);
  });

  test("보너스 번호를 입력하는 테스트", () => {
    expect(lottoSystem.setBonusNumber()).toBe(7);
  });
});
