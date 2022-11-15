const App = require('../src/App');
const Lotto = require('../src/Lotto');
const LottoIssuer = require('../src/LottoIssuer');
const { PRIZE } = require('../src/Constants');
const { Console, Random } = require('@woowacourse/mission-utils');

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, Console.readLine);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또 기능 테스트 - 구입 금액 입력 받기', () => {
  test('입력금액이 유효하지 않은 경우 예외를 발생시킨다.', () => {
    mockQuestions(['1200']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });
  Console.close();
});

describe('로또 기능 테스트 - 당첨 번호 입력 받기', () => {
  test('로또 당첨 번호가 유효하지 않은 경우 예외를 발생시킨다.', () => {
    mockQuestions(['10000', '1,2,3,4,5']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });
  Console.close();
});

describe('로또 기능 테스트 - 보너스 번호 입력 받기', () => {
  test('로또 보너스 번호가 유효하지 않은 경우 예외를 발생시킨다.', () => {
    mockQuestions(['10000', '1,2,3,4,5,6', '6']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });
  Console.close();
});

describe('로또 기능 테스트 - 로또 발행', () => {
  test('사용자에게 입력받은 구입 금액만큼 로또를 발행한다.', () => {
    const money = 12000;
    const issuedLottoes = LottoIssuer.issueLottoes(money);
    expect(issuedLottoes).toHaveLength(money / 1000);
  });
  Console.close();
});

describe('로또 기능 테스트 - 당첨 결과 확인', () => {
  test('구매한 모든 로또 번호의 당첨 결과를 센다.', () => {
    const issuedLottoes = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.validateBonusNumber(7);
    const prizeRecord = lotto.getPrizeRecord(issuedLottoes);
    expect(prizeRecord[PRIZE.first]).toEqual(0);
    expect(prizeRecord[PRIZE.second]).toEqual(0);
    expect(prizeRecord[PRIZE.third]).toEqual(0);
    expect(prizeRecord[PRIZE.fourth]).toEqual(0);
    expect(prizeRecord[PRIZE.fifth]).toEqual(1);
  });
  Console.close();
});

describe('로또 기능 테스트 - 결과 출력', () => {
  test('당첨 내역과 수익률을 출력한다.', () => {
    const logs = [
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 62.5%입니다.',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.money = 8000;
    const prizeRecord = { first: 0, second: 0, third: 0, fourth: 0, fifth: 1 };
    const earningRate = app.calculateEarningRate(prizeRecord);
    App.printResult(prizeRecord, earningRate);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  Console.close();
});
