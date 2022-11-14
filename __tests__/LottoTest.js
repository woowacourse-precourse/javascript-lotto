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
  test("금액 숫자 입력 테스트", () => {
    mockQuestions(["1000j"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("금액 단위 테스트", () => {
    mockQuestions(["14030"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("입력값 개수 테스트", () => {
    mockQuestions(["8000","1,2,3,4,5,6,7"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("입력값 개수 테스트", () => {
    mockQuestions(["8000","1,2,3,4,5,6,7"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("입력값 개수 테스트", () => {
    mockQuestions(["8000","1,2,3,4,5,6,7"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("입력값 중복 테스트", () => {
    mockQuestions(["8000","1,2,3,5,5,6"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("입력값 범위 테스트", () => {
    mockQuestions(["8000","1,2,3,4,5,46"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  test("당첨번호와 보너스번호 중복 테스트", () => {
    mockQuestions(["8000","1,2,3,4,5,6","6"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
});
