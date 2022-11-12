const LottoApp = require("../src/Domain/LottoApp");
const LottoScreen = require("../src/View/LottoScreen");
const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");

const setTestEnv = (arr) => {
  MissionUtils.Console.readLine = jest.fn();
  arr.reduce((readLine, item) => {
    return readLine.mockImplementationOnce((msg, callback) => {
      callback(item);
    });
  }, MissionUtils.Console.readLine);
};

describe("로또 어플리케이션 테스트케이스", () => {
  test("숫자입력이 올바르지 않다면 에러를 발생시킵니다.", () => {
    const testArr = ["30", "1001", "ffk", "l000"];
    setTestEnv(testArr);

    expect(() => LottoScreen.insertMoney()).toThrow();
    expect(() => LottoScreen.insertMoney()).toThrow();
    expect(() => LottoScreen.insertMoney()).toThrow();
    expect(() => LottoScreen.insertMoney()).toThrow();
  });

  test("금액을 입력하면 로또 객체가 생성됩니다.", () => {
    const money = ["9000"];
    setTestEnv(money);

    LottoScreen.insertMoney();

    //로또객체를 필드로 가진다.
    expect(LottoScreen.lottoApp.lottos[0] instanceof Lotto).toBe(true);
    expect(LottoScreen.lottoApp.lottos.length).toBe(money / 1000);

    //배열의 길이는 항상 6이다.
    const lotto = LottoScreen.lottoApp.lottos[0].numbers;
    expect(lotto.length).toBe(6);

    //항상 1이상 45 이하 가 나온다.
    lotto.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
    });
  });
});
