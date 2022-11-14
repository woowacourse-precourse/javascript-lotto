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

describe("로또를 구매하는 기능", () => {
    test("[예외 처리] 입력한 값이 숫자가 아닌 경우", () => {
        const store = new LottoStore();

        expect(()=>store.buy("string")).toThrow("[ERROR]");
        expect(()=>store.buy("1000d")).toThrow("[ERROR]");
    });

    test("[예외 처리] 1000원 단위로 나누어 떨어지지 않는 경우", () => {
        const store = new LottoStore();

        expect(()=>store.buy(1234)).toThrow("[ERROR]");
    });
});