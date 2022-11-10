const LottoApp = require("../src/Domain/LottoApp");
const LottoScreen = require("../src/View/LottoScreen");
const MissionUtils = require("@woowacourse/mission-utils");

const setTestEnv = (arr) => {
  MissionUtils.Console.readLine = jest.fn();
  arr.reduce((readLine, item) => {
    return readLine.mockImplementationOnce((msg, callback) => {
      callback(item);
    });
  }, MissionUtils.Console.readLine);
};

describe("로또 어플리케이션 테스트케이스", () => {
  const testArr = ["30", "1001", "ffk", "l000"];

  setTestEnv(testArr);

  test("숫자입력이 올바르지 않다면 에러를 발생시킵니다.", () => {
    expect(() => LottoScreen.insertMoney()).toThrow();
    expect(() => LottoScreen.insertMoney()).toThrow();
    expect(() => LottoScreen.insertMoney()).toThrow();
    expect(() => LottoScreen.insertMoney()).toThrow();
  });
});
