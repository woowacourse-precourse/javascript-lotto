const LottoController = require("../src/domain/LottoController");
const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/model/Lotto");
const LottoModel = require("../src/model/LottoModel");
const Prize = require("../src/model/Prize");
const Utils = require("../src/assets/Utils");

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
  arr.reduce((acc, item) => {
    return acc.mockReturnValueOnce(item);
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

describe("입력한 금액에 대한 테스트", () => {
  test("올바른 금액 입력시 로또를 원소로 가지는 배열을 생성합니다.", () => {
    const money = ["1000"];
    setTestEnv(money);

    const lottoController = new LottoController();
    lottoController.start();

    //로또를 원소로가지는 배열을 생성한다.
    expect(Array.isArray(lottoController.lottoModel.lottos)).toBe(true);
  });

  test("로또배열은 로또들을 가지는 모델 인스턴스입니다.", () => {
    const money = ["1000"];
    setTestEnv(money);

    const lottoController = new LottoController();
    lottoController.start();

    //로또들을 가지는 로또모델의 인스턴스를 확인합니다.
    expect(lottoController.lottoModel instanceof LottoModel).toBe(true);
  });

  test("로또의 길이는 입력한 금액만큼 입니다.", () => {
    const money = ["5000"];
    setTestEnv(money);

    const lottoController = new LottoController();
    lottoController.start();
    //로또의 길이는 입력한 금액만큼입니다.
    expect(lottoController.lottoModel.lottos.length).toBe(+money[0] / 1000);
    expect(lottoController.lottoModel.lottos.length).toBe(5);
  });

  test("각 로또의 길이는 6입니다.", () => {
    const money = ["1000"];
    setTestEnv(money);

    const lottoController = new LottoController();
    lottoController.start();

    expect(lottoController.lottoModel.lottos[0].numbers.length).toBe(6);
    expect(
      lottoController.lottoModel.lottos[0].numbers.length
    ).not.toBeLessThanOrEqual(5);
    expect(
      lottoController.lottoModel.lottos[0].numbers.length
    ).not.toBeGreaterThanOrEqual(7);
  });

  test("로또의 숫자는 항상 1이상 45 이하가 나옵니다.", () => {
    const money = ["5000"];
    setTestEnv(money);

    const lottoController = new LottoController();
    lottoController.start();
    const list = lottoController.lottoModel.lottos;

    list.forEach((lotto) => {
      valueTest(lotto.numbers);
    });

    function valueTest(numbers) {
      numbers.forEach((number) => {
        expect(number).toBeLessThanOrEqual(45);
        expect(number).toBeGreaterThanOrEqual(1);
      });
    }
  });
});

describe("정답 입력 테스트", () => {
  test("정답에 중복이 있으면 예외가 발생합니다.", () => {
    const answer = ["1000", "1,2,3,4,5,5"];
    setTestEnv(answer);

    expect(() => {
      const lottoController = new LottoController();
      lottoController.start();
    }).toThrow("[ERROR]");
  });

  test("정답이 범위를 벗어나면 예외가 발생합니다.", () => {
    const answer = ["1000", "1,2,3,4,5,56"];
    setTestEnv(answer);

    expect(() => {
      const lottoController = new LottoController();
      lottoController.start();
    }).toThrow("[ERROR]");
  });

  test("정답길이가 7이상인 경우 예외가 발생합니다.", () => {
    const answer = ["1000", "1,2,3,4,5,6,9"];
    setTestEnv(answer);

    expect(() => {
      const lottoController = new LottoController();
      lottoController.start();
    }).toThrow("[ERROR]");
  });

  test("정답 길이가 5 이하일 경우 예외가 발생 합니다.", () => {
    const answer = ["1000", "1,2,3,4,5"];
    setTestEnv(answer);

    expect(() => {
      const lottoController = new LottoController();
      lottoController.start();
    }).toThrow("[ERROR]");
  });
});

describe("보너스 번호 선택 테스트", () => {
  test("보너스 번호가 글자 이면 예외가 발생합니다.", () => {
    const answer = ["1000", "1,2,3,4,5,6", "n"];
    setTestEnv(answer);

    expect(() => {
      const lottoController = new LottoController();
      lottoController.start();
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 중복이 아닌 숫자면 예외가 발생하지 않습니다.", () => {
    const answer = ["1000", "1,2,3,4,5,6", "7"];
    setTestEnv(answer);

    expect(() => {
      const lottoController = new LottoController();
      lottoController.start();
    }).not.toThrow("[ERROR]");
  });

  test("보너스 번호가 중복이면 예외가 발생 합니다.", () => {
    const answer = ["1000", "1,2,3,4,5,6", "3"];
    setTestEnv(answer);

    expect(() => {
      const lottoController = new LottoController();
      lottoController.start();
    }).toThrow("[ERROR]");
  });

  test("보너스 번호의 타입은 스트링입니다.", () => {
    const answer = ["1000", "1,2,3,4,5,6", "7"];
    setTestEnv(answer);

    const lottoController = new LottoController();
    lottoController.start();

    expect(typeof lottoController.lottoModel.bonuse).toBe("string");
  });

  test("보너스 숫자가 45보다 크지면 예외가 발생합니다.", () => {
    const answer = ["1000", "1,2,3,4,5,6", "46"];
    setTestEnv(answer);

    expect(() => {
      const lottoController = new LottoController();
      lottoController.start();
    }).toThrow("[ERROR]");
  });
});

describe("정답평가 테스트", () => {
  test("결과 평가시 각 배열의 숫자의 의미는 맞춘 숫자의 수 입니다.", () => {
    const answer = ["1000", "1,2,3,4,5,6", "7"];
    setTestEnv(answer);

    setRandom([[5, 6, 7, 8, 9, 10]]);

    const lottoController = new LottoController();
    lottoController.start();

    const result = lottoController.lottoModel.result;

    expect(result).toContain(2);
  });

  test("결과 평가시 정답이 담긴 배열을 리턴합니다.", () => {
    const answer = ["1000", "1,2,3,4,5,6", "7"];
    setTestEnv(answer);

    setRandom([[5, 6, 7, 8, 9, 10]]);

    const lottoController = new LottoController();
    lottoController.start();

    const result = lottoController.lottoModel.result;
    expect(typeof result).toBe("object"); //배열은 오브젝트 타입;
    expect(result instanceof Array).toBe(true); //배열의 인스턴스검사
  });

  test("배열로 당첨여부와 상금을 확인 할 수 있습니다.", () => {
    const prize = new Prize();

    prize.applyResult([3, 3, 3, 4, 4]);

    expect(prize.threeWin).toBe(3);
    expect(prize.fourWin).toBe(2);
    expect(prize.totalPrize).toBe(115000);
  });
});

describe("Lotto 객체 테스트", () => {
  test("랜덤한 숫자를 당첨 번호로 가집니다.", () => {
    setRandom([[5, 6, 7, 8, 9, 10]]);

    const lotto = new Lotto();

    expect(lotto.numbers).toContain(5, 6, 7, 8, 9, 10);
    expect(lotto.numbers).toContainEqual(5, 6, 7, 8, 9, 10);
  });

  test("로또 번호는 배열입니다.", () => {
    setRandom([[5, 6, 7, 8, 9, 10]]);

    const lotto = new Lotto();

    expect(lotto.numbers instanceof Array).toBe(true);
  });

  test("스트링을 배열로 바꿀 수 있습니다.", () => {
    const str = "1,2,3";
    const arr = Utils.stringToArray(str);

    expect(arr instanceof Array).toBe(true);
  });

  test("스트링을 배열로 바꾸면 각 원소는 넘버가 됩니다.", () => {
    const str = "1,2,3";
    const arr = Utils.stringToArray(str);

    arr.forEach((number) => {
      expect(typeof number).toBe("number");
    });
  });

  test("Lotto 객체의 result 값은정답개수의 값 입니다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winNumber = "1,2,3,4,5,7";
    const bonus = "8";

    const result = lotto.getResult(winNumber, bonus);
    expect(result).toBe(5);
  });

  test("5개와 보너스가 맞은 로또를 판별할 수 있습니다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winNumber = "1,2,3,4,5,7";
    const bonus = "6";

    const result = lotto.getResult(winNumber, bonus);
    expect(result).toBe(-1);
  });
});
