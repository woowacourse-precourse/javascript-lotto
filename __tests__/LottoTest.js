const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");
const App = require("../src/App");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

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

  //아래에 추가 테스트 작성 가능
  test("구입 금액이 숫자가 아니면 예외가 발생한다", ()=>{
    mockQuestions(["notnumber"]);
    expect(() => {
      const app = new App();
      app.play();
  }).toThrow("[ERROR]");
  });

  test("구입 금액이 1000원으로 나누어 떨어지지 않으면 예외가 발생한다.", ()=>{
    mockQuestions(["1800"]);
    expect(() => {
      const app = new App();
      app.play();
  }).toThrow("[ERROR]");
  });

  test("구매한 금액에 따라 로또 장수를 출력한다", ()=>{
    mockQuestions(["1000"]);
    const logs = [
      "1개를 구매했습니다.",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    })
  });

  test("로또 번호가 1~45 범위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 46, 4, 5, 3]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 음수면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 46, 4, 5, 3]).validateBonus("-7");
    }).toThrow("[ERROR]");
  });
  test("보너스 번호가 0이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 46, 4, 5, 3]).validateBonus("0");
    }).toThrow("[ERROR]");
  });
  test("보너스 번호가 45를 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 46, 4, 5, 3]).validateBonus("47");
    }).toThrow("[ERROR]");
  });
});
