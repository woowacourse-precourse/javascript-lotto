const LottoStore = require("../src/LottoStore");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("로또 테스트", () => {
  test("숫자가 아닌 값을 입력했을 때 예외 테스트", () => {
    mockQuestions(["1000j"]);
    expect(() => {
      const lottoStore = new LottoStore();
      lottoStore.sellLottos();
    }).toThrow("[ERROR]");
  });

  test("1000단위가 아닌 숫자를 입력했을 때 예외 테스트", () => {
    mockQuestions(["10001"]);
    expect(() => {
      const lottoStore = new LottoStore();
      lottoStore.sellLottos();
    }).toThrow("[ERROR]");
  });

  test("1000단위인 숫자를 입력했을 때 정상동작 테스트", () => {
    mockQuestions(["10000"]);
    expect(() => {
      const lottoStore = new LottoStore();
      const numbersOfLottos = lottoStore.sellLottos();
      expect(numbersOfLottos).toEqual(10);
    });
  });
});
