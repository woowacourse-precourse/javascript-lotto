const App = require('../src/App.js');
const MissionUtils = require('@woowacourse/mission-utils');
const { createLottoNumber, generateLottoNumber } = require('../src/utils/common.js');

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
    expect(createLottoNumber()).toEqual([8, 23, 21, 42, 41, 43]);
  });

  test('로또 번호 오름차순 정렬', () => {
    mockRandoms([[8, 21, 23, 41, 42, 43]]);
    expect(generateLottoNumber()).toEqual([8, 21, 23, 41, 42, 43]);
  });
});

describe('당첨번호 입력 유효성 테스트', () => {
  test('6개의 숫자를 입력하지 않았을 때', () => {
    mockQuestions(['1,2,3,4']);
    expect(() => {
      const app = new App();
      app.inputWinningNumberFromUser();
    }).toThrow('[ERROR]');
  });

  test('아무것도 입력하지 않았을 때', () => {
    mockQuestions(['']);
    expect(() => {
      const app = new App();
      app.inputWinningNumberFromUser();
    }).toThrow('[ERROR]');
  });

  test('바로 엔터를 입력했을 때', () => {
    mockQuestions(['\n']);
    expect(() => {
      const app = new App();
      app.inputWinningNumberFromUser();
    }).toThrow('[ERROR]');
  });

  test('숫자외에 다른값과 함께 입력했을 때', () => {
    mockQuestions(['!@#$!@,1,2,3,4,5']);
    expect(() => {
      const app = new App();
      app.inputWinningNumberFromUser();
    }).toThrow('[ERROR]');
  });

  test('중간에 공백이 있을 때', () => {
    mockQuestions(['1, ,2,3,4,5']);
    expect(() => {
      const app = new App();
      app.inputWinningNumberFromUser();
    }).toThrow('[ERROR]');
  });

  test('1-45 범위의 값이 아닐때', () => {
    mockQuestions(['1,0,2,3,4,5']);
    expect(() => {
      const app = new App();
      app.inputWinningNumberFromUser();
    }).toThrow('[ERROR]');
  });

  test('중복 숫자를 입력했을 때', () => {
    mockQuestions(['5,5,5,3,4,5']);
    expect(() => {
      const app = new App();
      app.inputWinningNumberFromUser();
    }).toThrow('[ERROR]');
  });
});

describe('보너스 번호 입력 유효성 테스트', () => {
  test('아무것도 입력하지 않았을 떄', () => {
    mockQuestions(['']);
    expect(() => {
      const app = new App();
      app.inputBonusNumberFromUser();
    }).toThrow('[ERROR]');
  });

  test('빈 공백을 입력했을 때', () => {
    mockQuestions([' ']);
    expect(() => {
      const app = new App();
      app.inputBonusNumberFromUser();
    }).toThrow('[ERROR]');
  });

  test('엔터만 쳤을 때', () => {
    mockQuestions(['\n']);
    expect(() => {
      const app = new App();
      app.inputBonusNumberFromUser();
    }).toThrow('[ERROR]');
  });

  test('숫자를 입력하지 않았을 때', () => {
    mockQuestions(['!DA']);
    expect(() => {
      const app = new App();
      app.inputBonusNumberFromUser();
    }).toThrow('[ERROR]');
  });

  test('로또 숫자 범위가 아닌 수를 입력하였을 떄', () => {
    mockQuestions(['46']);
    expect(() => {
      const app = new App();
      app.inputBonusNumberFromUser();
    }).toThrow('[ERROR]');
  });

  test('로또 숫자 범위가 아닌 수를 입력하였을 떄', () => {
    mockQuestions(['-1']);
    expect(() => {
      const app = new App();
      app.inputBonusNumberFromUser();
    }).toThrow('[ERROR]');
  });
});
