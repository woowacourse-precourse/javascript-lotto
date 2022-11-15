const { Console } = require('@woowacourse/mission-utils');
const DrawMachine = require('../src/DrawMachine');

const mockQuestion = (answers) => {
  Console.readLine = jest.fn();
  Console.readLine.mockImplementationOnce((question, callback) => {
    callback(answers);
  });
};

describe('Draw Machine 클래스', () => {
  const drawMachine = new DrawMachine();

  test('당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      drawMachine.validateWinningNumber('1, 2, 3, 4, 5, 6, 7');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호의 개수가 6개보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      drawMachine.validateWinningNumber('1, 2, 3, 4, 5, 6, 7');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      drawMachine.validateWinningNumber('1, 2, 3, 4, 5, 5');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 1 미만의 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      drawMachine.validateWinningNumber('-1, 2, 3, 4, 5, 6');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 45 초과의 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      drawMachine.validateWinningNumber('42, 43, 44, 45, 46, 47');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호를 쉼표로 구분하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      drawMachine.validateWinningNumber('1. 2. 3. 4. 5. 6');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호에 1 미만의 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      drawMachine.validateBonusNumber('-1');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호에 45 초과의 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      drawMachine.validateBonusNumber('46');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호 개수가 1개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      drawMachine.validateBonusNumber('1, 2');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      drawMachine.validateBonusNumber('일');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.', () => {
    mockQuestion('1, 2, 3, 4, 5, 6');
    drawMachine.askWinningNumber();
    expect(() => {
      drawMachine.validateBonusNumber('1');
    }).toThrow('[ERROR]');
  });
});
