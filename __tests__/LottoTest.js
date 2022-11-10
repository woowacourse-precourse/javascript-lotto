const Lotto = require("../src/Lotto");
const Customer = require("../src/Customer");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answer) => {
  MissionUtils.Console.readLine = jest.fn();
  MissionUtils.Console.readLine.mockReturnValue(answer);
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
});

describe("Feat 1. Customer.buyLotto", () => {
  test("입력된 금액이 천원으로 나누어 떨어진다.", () => {
    mockQuestions("8000");
    expect(Customer.buyLotto()).toBe(Math.floor(value / 1000));
  });

  test("입력된 금액이 천원으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    mockQuestions("8001");
    expect(Customer.buyLotto()).toThrow("[ERROR]");
  });
});
