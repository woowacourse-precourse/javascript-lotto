const App = require('../src/App.js');
const MissionUtils = require('@woowacourse/mission-utils');

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

describe('구입금액 입력 테스트', () => {
  test('1000으로 나누어떨어지지 않는 수를 입력했을 때', () => {
    expect(() => {
      const app = new App();
      app.isValidatePurchaseAmount('100');
    }).toThrow('[ERROR]');
  });

  test('문자를 입력했을 때', () => {
    expect(() => {
      const app = new App();
      app.isValidatePurchaseAmount('*(*)');
    }).toThrow('[ERROR]');
  });

  test('공백을 입력했을 떄', () => {
    expect(() => {
      const app = new App();
      app.isValidatePurchaseAmount(' ');
    }).toThrow('[ERROR]');
  });

  test('0을 입력했을 떄', () => {
    expect(() => {
      const app = new App();
      app.isValidatePurchaseAmount('0');
    }).toThrow('[ERROR]');
  });

  test('음수을 입력했을 떄', () => {
    expect(() => {
      const app = new App();
      app.isValidatePurchaseAmount('-1000');
    }).toThrow('[ERROR]');
  });
});

describe('로또 번호를 발급하는 기능 테스트', () => {
  test('로또 번호 생성', () => {
    mockRandoms([[8, 23, 21, 42, 41, 43]]);
    const app = new App();
    expect(app.createLottoNumber()).toEqual([8, 23, 21, 42, 41, 43]);
  });

  test('로또 번호 오름차순 정렬', () => {
    mockRandoms([[8, 21, 23, 41, 42, 43]]);
    const app = new App();
    const lottoNumber = app.createLottoNumber();
    console.log(app.sortAscendingOrderLottoNumber(lottoNumber));
    expect(app.sortAscendingOrderLottoNumber(lottoNumber)).toEqual([8, 21, 23, 41, 42, 43]);
  });
});
