const App = require("../src/App");
const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");
const generateRandom = require('../utils/Source.js');

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
  test("로또 번호가 1에서 45 사이의 숫자가 아니면 예외가 발생한다", () => {
    expect(() =>{
      new Lotto([46,47,48,49,50,51]);
    }).toThrow("[ERROR]");
  });

  test("[기능 1] 구입 금액을 1000원 단위로 입력받는다.", () => {
    mockQuestions(["1001"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  })
});

