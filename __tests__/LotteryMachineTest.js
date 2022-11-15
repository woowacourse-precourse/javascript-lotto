const MissionUtils = require("@woowacourse/mission-utils");
const LotteryMachine = require("../src/LotteryMachine");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("로또 발행기 클래스 테스트", () => {
  test("기능 테스트", () => {
    mockQuestions(["5,10,15,20,25,30", "7"]);

    const machine = new LotteryMachine();
    machine.draw();
    expect(machine.getBonusNum()).toEqual(7);
    expect(machine.getWinningNum()).toEqual([5, 10, 15, 20, 25, 30]);
  });

  test("문자열을 숫자 배열로 만드는 기능 테스트", () => {
    const machine = new LotteryMachine();
    const result = machine.changeNumArray("1,2,3,4,5,6");

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("validNum 메서드 테스트", () => {
    const machine = new LotteryMachine();

    expect(() => {
      machine.validNum("4a");
    }).toThrow("[ERROR]");

    expect(() => {
      machine.validNum("46");
    }).toThrow("[ERROR]");

    expect(() => {
      machine.validNum("0");
    }).toThrow("[ERROR]");

    expect(() => {
      machine.validNum("");
    }).toThrow("[ERROR]");
  });

  test("예외 - 당첨 번호가 숫자가 아닌 값이 들어간 경우", () => {
    mockQuestions(["5,10,15,20,25,a"]);

    expect(() => {
      const machine = new LotteryMachine();
      machine.draw();
    }).toThrow("[ERROR]");
  });

  test("예외 - 당첨 번호가 6개가 아닌 경우", () => {
    mockQuestions(["5,10,15,20,25,30,35"]);

    expect(() => {
      const machine = new LotteryMachine();
      machine.draw();
    }).toThrow("[ERROR]");
  });

  test("예외 - 당첨 번호가 1~45 사이에 수가 아닌 경우", () => {
    mockQuestions(["5,10,15,20,25,46"]);

    expect(() => {
      const machine = new LotteryMachine();
      machine.draw();
    }).toThrow("[ERROR]");
  });

  test("예외 - 당첨번호에 중복된 수가 있는 경우", () => {
    mockQuestions(["5,10,15,20,25,25"]);

    expect(() => {
      const machine = new LotteryMachine();
      machine.draw();
    }).toThrow("[ERROR]");
  });

  test("예외 - 보너스 번호가 당첨번호와 중복된 경우", () => {
    mockQuestions(["5,10,15,20,25,30", "30"]);

    expect(() => {
      const machine = new LotteryMachine();
      machine.draw();
    }).toThrow("[ERROR]");
  });

  test("예외 - 당첨 번호를 쉼표로 구분하지 않은 경우", () => {
    mockQuestions(["5,10,15,20.25.30"]);

    expect(() => {
      const machine = new LotteryMachine();
      machine.draw();
    }).toThrow("[ERROR]");
  });
});
