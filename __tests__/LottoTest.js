const App = require("../src/App");
const Lotto = require("../src/Lotto");
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
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 입력값에 중복이 있습니다.");
  });

  test("입력한 로또 번호의 개수가 6개가 아니면 예외 발생",()=>{
    mockQuestions(["3000","1,2,3,4,5"]);
    expect(()=>{
      const app = new App();
      app.play();
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  })

  test("입력한 로또 번호가 중복되면 예외 발생",()=>{
    mockQuestions(["3000","1,2,3,4,5,5"]);
    expect(()=>{
      const app = new App();
      app.play();
    }).toThrow("[ERROR] 입력값에 중복이 있습니다.");
  })
});
