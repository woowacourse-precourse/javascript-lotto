const LottoMachine = require("../src/LottoMachine");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("로또머신 클래스 테스트", () => {
  
  test("제너레이터 테스트", () => {
    const lottoMachine = new LottoMachine();
    const numbers = lottoMachine.generateNumbers();
    expect(numbers).toHaveLength(6);
  });

  test("번호 테스트", () => {
    const lottoMachine = new LottoMachine();
    const numbers = lottoMachine.generateNumbers();
    numbers.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(number, 1);
      expect(number).toBeLessThanOrEqual(number, 45);
    });
  });

  test("매번 다른 번호를 뽑아 내는지 확인", () => {
    const lottoMachine = new LottoMachine();
    const numbers1 = lottoMachine.generateNumbers();
    const numbers2 = lottoMachine.generateNumbers();
    const duplicatedNumber = numbers1.filter((number, idx) => number === numbers2[idx]);
    expect(duplicatedNumber).not.toHaveLength(6);
  });

  test("당첨 번호 입력 테스트", () => {
    mockQuestions(["1,2,3,4,5,6"]);
    const lottoMachine = new LottoMachine();
    const winningNumbers = lottoMachine.takeWinningNumbers();
    expect(winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
  })

  test("보너스 번호 입력 테스트", () => {
    mockQuestions(["1,2,3,4,5,6", "7"]);
    const lottoMachine = new LottoMachine();
    const winningNumbers = lottoMachine.takeWinningNumbers();
    const bonusNumber = lottoMachine.takeBonusNumberExcept(winningNumbers);
    expect(bonusNumber).toEqual(7);
  })
});
