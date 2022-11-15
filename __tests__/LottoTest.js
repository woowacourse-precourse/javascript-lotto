const Lotto = require("../src/Lotto");
const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");


const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
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

  // 아래에 추가 테스트 작성 가능
});

describe("App 클래스 예외 테스트", () => {

  test("입력금액이 1000단위로 떨어지지 않을때", () => {
    mockQuestions(["8010", "1,2,3,4,5,6", "7"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("당첨번호 입력값 type 테스트", () => {
    mockQuestions(["8000", "1,3,5,누누,4,7"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("당첨번호 중복테스트", () => {
    mockQuestions(["8000", "1,2,3,4,5,5", "7"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("당첨번호 입력값 범위 테스트", () => {
    mockQuestions(["8000", "1,210,3,4,5,5", "7"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("보너스번호 입력값 type 테스트", () => {
    mockQuestions(["8000", "1,2,3,4,5,6", "누누"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("보너스번호 당첨번호 포함여부 테스트", () => {
    mockQuestions(["8000", "1,2,3,4,5,6", "1"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });
});


 

