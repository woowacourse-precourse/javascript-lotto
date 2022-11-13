const LottoController = require("../src/domain/LottoController");
const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/model/Lotto");

const lottoController = new LottoController();

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

    expect(() => lottoController.start()).toThrow();
    expect(() => lottoController.start()).toThrow();
    expect(() => lottoController.start()).toThrow();
    expect(() => lottoController.start()).toThrow();
  });

  test("금액을 입력하면 로또 객체가 생성됩니다.", () => {
    const money = ["9000"];
    setTestEnv(money);

    lottoController.start();

    //로또객체를 필드로 가진다.
    expect(lottoController.lottoModel.lottos[0] instanceof Lotto).toBe(true);
    expect(lottoController.lottoModel.lottos.length).toBe(money / 1000);

    //배열의 길이는 항상 6이다.
    const lotto = lottoController.lottoModel.lottos[0].numbers;
    expect(lotto.length).toBe(6);

    //항상 1이상 45 이하 가 나온다.
    lotto.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
    });
  });

  test("정답이 중복이면 예외가 발생합니다.", () => {
    const test = ["1000", "1,2,3,4,5,5"];
    setTestEnv(test);

    expect(() => {
      lottoController.start();
      lottoController.selectWinNumber();
    }).toThrow("[ERROR]");
  });

  test("정답이 범위를 벗어나면 예외가 발생합니다.", () => {
    const test = ["1000", "1,300,3,4,5,5"];
    setTestEnv(test);

    expect(() => {
      lottoController.start();
      lottoController.selectWinNumber();
    }).toThrow("[ERROR]");
  });

  test("정답의 길이가 잘못되면 예외가 발생합니다.", () => {
    const test = ["1000", "1,2,3,4,5,6,7"];
    setTestEnv(test);

    expect(() => {
      lottoController.start();
      lottoController.selectWinNumber();
    }).toThrow("[ERROR]");

    const testTwo = ["1000", "1,2,3,4,5"];
    setTestEnv(testTwo);

    expect(() => {
      lottoController.start();
      lottoController.selectWinNumber();
    }).toThrow("[ERROR]");
  });

  test("로또당첨번호에 맞는 배열의 길이를 리턴합니다", () => {
    const result = lottoController.lottoModel.lottos[0].getResult(
      "1,2,3,4,5,6",
      "7"
    );
    expect(typeof result).toBe("number");
    expect(result).toBeLessThanOrEqual(6);
    expect(result).toBeGreaterThanOrEqual(-1);
  });
});
