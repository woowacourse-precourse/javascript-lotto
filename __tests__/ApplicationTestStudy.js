const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  //유저의 답변들이 배열로 들어옴
  MissionUtils.Console.readLine = jest.fn(); //readLine에 목함수를 할당
  answers.reduce((acc, input) => {
    //answer 처음값과 다음값을 받고
    return acc.mockImplementationOnce((question, callback) => {
      //리턴함 mockImplementationOnce는 호출 될 때 마다 값이 달라지게 구현 가능 질문과 콜백을 받아서
      callback(input); //콜백에 다음 값을 다시 인풋을 넣고 실행
    });
  }, MissionUtils.Console.readLine); //처음 값은 목함수
};

// ["8000", "1,2,3,4,5,6", "7"].reduce((jest.fn(), "8000") => {
//   //answer 초기값과 다음값을 받고
//   return jest.fn().mockImplementationOnce((question, callback) => {
//     //리턴함 mockImplementationOnce는 호출 될 때 마다 값이 달라지게 구현 가능 질문과 콜백을 받아서
//     callback(input); //콜백에 다음 값을 다시 인풋을 넣고 실행
//   });
// }, MissionUtils.Console.readLine); //처음 값은 목함수

//아직까지 무슨말인지 모르겠다 일단 다음것도 진행해보면서 이해해보기

const mockRandoms = (numbers) => {
  //랜덤 함수 구현?
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn(); //랜덤 숫자 추출 함수에 할당
  numbers.reduce((acc, number) => {
    //배열로 들어오면 첫 값은 jest.fn()에 더하기 시작
    return acc.mockReturnValueOnce(number); //하나씩 값을 리턴
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  // 모킹 추적하고 초기화
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("로또 테스트", () => {
  test("기능 테스트", () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(["8000", "1,2,3,4,5,6", "7"]);
    const logs = [
      "8개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[7, 11, 16, 35, 36, 44]",
      "[1, 8, 11, 31, 41, 42]",
      "[13, 14, 16, 38, 42, 45]",
      "[7, 11, 30, 40, 42, 43]",
      "[2, 13, 22, 32, 38, 45]",
      "[1, 3, 5, 14, 22, 45]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 62.5%입니다.",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외 테스트", () => {
    mockQuestions(["1000j"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });
});
