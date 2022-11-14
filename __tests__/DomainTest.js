const LottoController = require("../src/domain/LottoController");
const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/model/Lotto");
const LottoModel = require("../src/model/LottoModel");

const setTestEnv = (arr) => {
  MissionUtils.Console.readLine = jest.fn();
  arr.reduce((readLine, item) => {
    return readLine.mockImplementationOnce((msg, callback) => {
      callback(item);
    });
  }, MissionUtils.Console.readLine);
};

const setRandom = (arr) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  arr.reduce((picker, item) => {
    return picker.mockReturnValueOnce(item);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("금액 입력에 대한 테스트", () => {
  const error = "[ERROR]";

  test("금액이 1000 이하이면 에러입니다.", () => {
    const money = ["300"];
    setTestEnv(money);

    const lottoController = new LottoController();

    expect(() => lottoController.start()).toThrow(error);
  });

  test("금액이 1000으로 나누어 떨어지지 않으면 에러입니다.", () => {
    const money = ["1001"];
    setTestEnv(money);

    const lottoController = new LottoController();

    expect(() => lottoController.start()).toThrow(error);
  });

  test("숫자외의 글자가입력 되면 에러입니다.", () => {
    const money = ["gde"];
    setTestEnv(money);

    const lottoController = new LottoController();

    expect(() => lottoController.start()).toThrow(error);
  });

  test("숫자와 다른글자가 섞이면 에러입니다.", () => {
    const money = ["100o"];
    setTestEnv(money);

    const lottoController = new LottoController();

    expect(() => lottoController.start()).toThrow(error);
  });
});

describe.only("입력한 금액에 대한 테스트", () => {
  test("올바른 금액 입력시 로또를 원소로 가지는 배열을 생성합니다.", () => {
    const money = ["1000"];
    setTestEnv(money);

    const mockNumbers = [[1, 2, 3, 4, 5, 6]];
    setRandom(mockNumbers);

    const lottoController = new LottoController();
    lottoController.start();

    //로또를 원소로가지는 배열을 생성한다.
    expect(Array.isArray(lottoController.lottoModel.lottos)).toBe(true);
  });

  test("로또배열은 로또들을 가지는 모델 인스턴스입니다.", () => {
    const money = ["1000"];
    setTestEnv(money);

    const mockNumbers = [[1, 2, 3, 4, 5, 6]];
    setRandom(mockNumbers);

    const lottoController = new LottoController();
    lottoController.start();

    //로또들을 가지는 로또모델의 인스턴스를 확인합니다.
    expect(lottoController.lottoModel instanceof LottoModel).toBe(true);
  });

  test("로또의 길이는 입력한 금액만큼 입니다.", () => {
    const money = ["2000"];
    setTestEnv(money);

    const mockNumbers = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ];
    setRandom(mockNumbers);

    const lottoController = new LottoController();
    lottoController.start();
    //로또의 길이는 입력한 금액만큼입니다.
    expect(lottoController.lottoModel.lottos.length).toBe(+money[0] / 1000);
    expect(lottoController.lottoModel.lottos.length).toBe(2);
  });

  test("각 로또의 길이는 6입니다.", () => {
    const money = ["1000"];
    setTestEnv(money);

    const mockNumbers = [[1, 2, 3, 4, 5, 6]];
    setRandom(mockNumbers);

    const lottoController = new LottoController();
    lottoController.start();

    expect(lottoController.lottoModel.lottos[0].numbers.length).toBe(6);
    expect(lottoController.lottoModel.lottos[0].numbers.length).not.toBe(5);
    expect(lottoController.lottoModel.lottos[0].numbers.length).toBe(
      mockNumbers[0].length
    );
  });

  //항상 1이상 45 이하 가 나온다.
});

//   test("정답이 중복이면 예외가 발생합니다.", () => {
//     const test = ["1000", "1,2,3,4,5,5"];
//     setTestEnv(test);

//     expect(() => {
//       lottoController.start();
//       lottoController.selectWinNumber();
//     }).toThrow("[ERROR]");
//   });

//   test("정답이 범위를 벗어나면 예외가 발생합니다.", () => {
//     const test = ["1000", "1,300,3,4,5,5"];
//     setTestEnv(test);

//     expect(() => {
//       lottoController.start();
//       lottoController.selectWinNumber();
//     }).toThrow("[ERROR]");
//   });

//   test("정답의 길이가 잘못되면 예외가 발생합니다.", () => {
//     const test = ["1000", "1,2,3,4,5,6,7"];
//     setTestEnv(test);

//     expect(() => {
//       lottoController.start();
//       lottoController.selectWinNumber();
//     }).toThrow("[ERROR]");

//     const testTwo = ["1000", "1,2,3,4,5"];
//     setTestEnv(testTwo);

//     expect(() => {
//       lottoController.start();
//       lottoController.selectWinNumber();
//     }).toThrow("[ERROR]");
//   });

//   test("로또당첨번호에 맞는 배열의 길이를 리턴합니다", () => {
//     const result = lottoController.lottoModel.lottos[0].getResult(
//       "1,2,3,4,5,6",
//       "7"
//     );
//     expect(typeof result).toBe("number");
//     expect(result).toBeLessThanOrEqual(6);
//     expect(result).toBeGreaterThanOrEqual(-1);
//   });
// });
