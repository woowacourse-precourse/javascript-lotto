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

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

test("보너스 중복 여부 테스트", () => {
  mockRandoms([
    [1, 6, 10, 32, 41, 45],
    [2, 3, 5, 9, 22, 30],
    [3, 6, 10, 32, 34, 35],
    [2, 5, 11, 20, 31, 42],
    [8, 15, 17, 31, 34, 38],
    [4, 10, 11, 22, 23, 35],
    [1, 6, 10, 32, 41, 39],
    [8, 16, 25, 31, 33, 41],
    [1, 2, 3, 27, 30, 38],
    [6, 16, 20, 41, 43, 45],
    [4, 7, 9, 10, 15, 29],
    [6, 9, 14, 15, 19, 30],
    [4, 5, 6, 23, 35, 44],
  ]);
  mockQuestions(["13000", "2,3,9,22,30,45", "문자"]);
  expect(() => {
    const app = new App();
    app.play();
  }).toThrow("[ERROR] 숫자가 아닌 문자를 입력했습니다.");
});

test("보너스 숫자 범위 유효성 테스트", () => {
  mockRandoms([
    [1, 6, 10, 32, 41, 45],
    [2, 3, 5, 9, 22, 30],
    [3, 6, 10, 32, 34, 35],
    [2, 5, 11, 20, 31, 42],
    [8, 15, 17, 31, 34, 38],
    [4, 10, 11, 22, 23, 35],
    [1, 6, 10, 32, 41, 39],
    [8, 16, 25, 31, 33, 41],
    [1, 2, 3, 27, 30, 38],
    [6, 16, 20, 41, 43, 45],
    [4, 7, 9, 10, 15, 29],
    [6, 9, 14, 15, 19, 30],
    [4, 5, 6, 23, 35, 44],
  ]);
  mockQuestions(["13000", "2,3,9,22,30,45", "48"]);
  expect(() => {
    const app = new App();
    app.play();
  }).toThrow("[ERROR] 1~45 중의 자연수를 입력하세요.");
});

test("보너스 중복 여부 테스트", () => {
  mockRandoms([
    [1, 6, 10, 32, 41, 45],
    [2, 3, 5, 9, 22, 30],
    [3, 6, 10, 32, 34, 35],
    [2, 5, 11, 20, 31, 42],
    [8, 15, 17, 31, 34, 38],
    [4, 10, 11, 22, 23, 35],
    [1, 6, 10, 32, 41, 39],
    [8, 16, 25, 31, 33, 41],
    [1, 2, 3, 27, 30, 38],
    [6, 16, 20, 41, 43, 45],
    [4, 7, 9, 10, 15, 29],
    [6, 9, 14, 15, 19, 30],
    [4, 5, 6, 23, 35, 44],
  ]);
  mockQuestions(["13000", "2,3,9,22,30,45", "45"]);
  expect(() => {
    const app = new App();
    app.play();
  }).toThrow("[ERROR] 입력하신 숫자는 이미 앞에서 뽑았습니다.");
});
