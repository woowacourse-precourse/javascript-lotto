const Lotto = require("../src/Lotto");
const Buyer = require("../src/Buyer");
const App = require("../src/App")
const {Console, Random} = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, Console.readLine);
};

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 1보다 작거나 45보다 큰 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "h"]);
    }).toThrow("[ERROR]");
  });
});

describe("로또 클래스 테스트", () => {
  test("금액은 숫자만 입력이 가능하다.", () => {
    const payment = "testPayment";
    const buyer = new Buyer();
    expect(() => {
      buyer.isValidpayment(payment);
    }).toThrow();
  });

  test("조건에 맞는 로또 금액을 입력 받는다.", () => {
    const payment = ["8000"];
    const outputPayment = 8000;
    const buyer = new Buyer();
    mockQuestions(payment);
    buyer.getLottoPayment(payment);
    expect(buyer.payment).toEqual(outputPayment);
  });

  test("로또금액에 따른 구매가능한 로또 개수를 계산한다.", () => {
    const payment = ["8000"];
    const outputCount = 8;
    const buyer = new Buyer();
    mockQuestions(payment);
    buyer.getLottoPayment(payment);
    buyer.setLottoCount(buyer.payment);
    expect(buyer.lottoCount).toEqual(outputCount);
  });

  test("로또 구매 개수가 출력", () => {
    const lottoCount = 8;
    const ouput = `\n8개를 구매했습니다`;

    const app = new App();
    const logSpy = getLogSpy();
    app.printLottoCount(lottoCount);

    expect(logSpy).toHaveBeenCalledWith(ouput);
  });

  test("로또 번호 출력", () => {
    const number = [1, 2, 3, 4, 5, 6];
    const output = "[1, 2, 3, 4, 5, 6]";

    const app = new App();
    const logSpy = getLogSpy();
    app.printLottoNumber(number);

    expect(logSpy).toHaveBeenCalledWith(output);
  });

  test("여러개의 로또 번호 출력", () => {
    const issuedLotto = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ];
    const output = "[8, 21, 23, 41, 42, 43]";
    ("[3, 5, 11, 16, 32, 38]");
    ("[7, 11, 16, 35, 36, 44]");
    const app = new App();
    const logSpy = getLogSpy();
    app.printIssuendLotto(issuedLotto);

    expect(logSpy).toHaveBeenCalledWith(output);
  });

  test("로또 번호는 중복되지 않는 숫자여야 합니다.", () => {
    const input = "1,2,3,4,4,5";
    const app = new App();
    expect(() => {
      app.isValidLottoNumber(input);
    }).toThrow();
  });

  test("로또 번호는 숫자여야 합니다.", () => {
    const input = "1,2,3,4,4,k";
    const app = new App();
    expect(() => {
      app.isValidLottoNumber(input);
    }).toThrow();
  });

  test("로또 번호는 숫자여야 합니다.", () => {
    const input = "1,2,3,4,0,56";
    const app = new App();
    expect(() => {
      app.isValidLottoNumber(input);
    }).toThrow();
  });

  test("보너스 번호는 숫자여야 합니다.", () => {
    const input = "k";
    const app = new App();
    expect(() => {
      app.isValidBonusNumber(input);
    }).toThrow();
  });

  test("보너스 번호는 하나여야 합니다.", () => {
    const input = "12";
    const app = new App();
    expect(() => {
      app.isValidBonusNumber(input);
    }).toThrow();
  });

  test("겹치는 번호의 개수를 계산합니다.", () => {
    const lotto = [1,2,3,4,5,6]
    const winniglotto = [1,2,3,6,7,8]
    const ouput = 4;

    const app = new App();
    const count = app.calculateOverlappintNumberCount(lotto, winniglotto);
    
    expect(count).toEqual(ouput);
  });

  test("보너스번호 확인", () => {
    const lotto = [1,2,3,4,5,6]
    const bonuslotto = 5
    const output = true;

    const app = new App();
    const count = app.hasBounsNumber(lotto, bonuslotto);
    
    expect(count).toEqual(output);
  });

  test("순위별 당첨자 수 구하기", ()=>{
    const issuedLotto = [
      [10, 11, 22, 27, 34, 35],
      [7, 25, 26, 31, 32, 38],
      [2, 4, 5, 15, 22, 35],
      [15, 23, 27, 30, 33, 41],
      [3, 4, 6, 20, 24, 39],
      [5, 11, 19, 32, 37, 40],
      [7, 15, 21, 34, 38, 45],
      [3, 4, 5, 13, 31, 38],
    ];
    const winningLotto = [1, 2, 3, 4, 5, 6];
    const bonusLotto = 7
    const output = [
      { rank: 1, matchCount: 6, reword: 2000000000, count: 0 },
      { rank: 2, matchCount: 5, reword: 30000000, count: 0 },
      { rank: 3, matchCount: 5, reword: 1500000, count: 0 },
      { rank: 4, matchCount: 4, reword: 50000, count: 3 },
      { rank: 5, matchCount: 3, reword: 5000, count: 0 },
    ];

    const app = new App();
    app.makeRankingResult(issuedLotto,winningLotto,bonusLotto)
    
    expect(app.rankingResult).toEqual(output);
  })

  test("수익률 계산",()=>{
    const issuedLotto = [
      [10, 11, 22, 27, 34, 35],
      [7, 25, 26, 31, 32, 38],
      [2, 4, 5, 15, 22, 35],
      [15, 23, 27, 30, 33, 41],
      [3, 4, 6, 20, 24, 39],
      [5, 11, 19, 32, 37, 40],
      [7, 15, 21, 34, 38, 45],
      [3, 4, 5, 13, 31, 38],
    ];
    const winningLotto = [1, 2, 3, 4, 5, 6];
    const bonusLotto = 7
    const lottoPayment = 230000;
    const output = 65.2

    const app = new App();
    app.makeRankingResult(issuedLotto,winningLotto,bonusLotto)
    const received = app.caclulateEarningsRate(app.rankingResult,lottoPayment)

    expect(received).toEqual(output);
  })

});