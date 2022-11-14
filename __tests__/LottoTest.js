const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('../src/Lotto');

const mockQuestions = answers => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe('투입 금액 테스트', () => {
  test('투입 금액이 1000원 단위가 아니면 예외가 발생한다.', () => {
    mockQuestions(['1500']);
    expect(() => {
      const app = new App();
      app.injectMoney();
    }).toThrow('[ERROR]');
  });

  test('투입 금액이 없으면 예외가 발생한다.', () => {
    mockQuestions(['']);
    expect(() => {
      const app = new App();
      app.injectMoney();
    }).toThrow('[ERROR]');
  });

  test('투입 금액이 숫자 이외의 값이면 예외가 발생한다.', () => {
    mockQuestions(['abc']);
    expect(() => {
      const app = new App();
      app.injectMoney();
    }).toThrow('[ERROR]');
  });
});

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호는 1~45 이외의 숫자를 입력하면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호는 숫자가 아닌 문자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, '6']);
    }).toThrow('[ERROR]');
  });

  test('로또 번호는 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1.5, 2.5, 3.5, 4.5, 5.5, 6.5]);
    }).toThrow('[ERROR]');
  });
});

describe('보너스 번호 테스트', () => {
  test('보너스 번호는 당첨 번호와 중복된 번호를 입력하면 예외가 발생한다.', () => {
    mockQuestions(['1,2,3,4,5,6', '1']);
    expect(() => {
      const app = new App();
      app.enterWinningNumber();
    }).toThrow('[ERROR]');
  });

  test('보너스 번호는 숫자 이외의 값이면 예외가 발생한다.', () => {
    mockQuestions(['abc']);
    expect(() => {
      const app = new App();
      app.enterBonusNumber();
    }).toThrow('[ERROR]');
  });

  test('보너스 번호는 1~45 이외의 숫자를 입력하면 예외가 발생한다.', () => {
    mockQuestions(['46']);
    expect(() => {
      const app = new App();
      app.enterBonusNumber();
    }).toThrow('[ERROR]');
  });

  test('보너스 번호의 개수가 1개를 넘어가면 예외가 발생한다', () => {
    mockQuestions(['1,2']);
    expect(() => {
      const app = new App();
      app.enterBonusNumber();
    }).toThrow('[ERROR]');
  });

  test('보너스 번호는 정수가 아니면 예외가 발생한다.', () => {
    mockQuestions(['1.1']);
    expect(() => {
      const app = new App();
      app.enterBonusNumber();
    }).toThrow('[ERROR]');
  });
});
