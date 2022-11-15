const { Console } = require('@woowacourse/mission-utils');
const Draw = require('../src/Draw');

describe('Draw 클래스 테스트', () => {
  test('당첨 번호가 쉼표(,)를 기준으로 구분되는 숫자 6개가 아니면 예외가 발생한다.', () => {
    expect(() => {
      const input = '1,2,3,4,5/6';

      Draw.validateWinningInput(input);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 쉼표(,)를 기준으로 구분되는 숫자 6개가 아니면 예외가 발생한다.', () => {
    expect(() => {
      const input = '1,2,3,4,5,,6';

      Draw.validateWinningInput(input);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 쉼표(,)를 기준으로 구분되는 숫자 6개이면 예외가 발생하지 않는다.', () => {
    expect(() => {
      const input = '1,2,3,4,5,6';

      Draw.validateWinningInput(input);
    }).not.toThrow('[ERROR]');
  });

  test('당첨 번호가 자연수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      const winning = [-1, 2, 3, 4, 5, 6];

      Draw.validateWinningNumbers(winning);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 자연수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      const winning = [0.5, 2, 3, 4, 5, 6];

      Draw.validateWinningNumbers(winning);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 자연수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      const winning = [0, 2, 3, 4, 5, 6];

      Draw.validateWinningNumbers(winning);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 1 이상 45 이하의 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      const winning = [1, 2, 3, 4, 5, 100];

      Draw.validateWinningNumbers(winning);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호 중 중복되는 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      const winning = [1, 2, 2, 3, 4, 5];

      Draw.validateWinningNumbers(winning);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 중복되지 않는 1 이상 45 이하의 자연수 6개이면 예외가 발생하지 않는다.', () => {
    expect(() => {
      const winning = [10, 11, 12, 13, 14, 15];

      Draw.validateWinningNumbers(winning);
    }).not.toThrow('[ERROR]');
  });

  test('보너스 번호가 자연수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      Draw.winning = [1, 2, 3, 4, 5, 6];
      const bonus = 7.5;

      Draw.validateBonusNumber(bonus);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 자연수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      Draw.winning = [1, 2, 3, 4, 5, 6];
      const bonus = 0;

      Draw.validateBonusNumber(bonus);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1 이상 45 이하의 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      Draw.winning = [1, 2, 3, 4, 5, 6];
      const bonus = 46;

      Draw.validateBonusNumber(bonus);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.', () => {
    expect(() => {
      Draw.winning = [8, 10, 23, 34, 38, 45];
      const bonus = 8;

      Draw.validateBonusNumber(bonus);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호와 중복되지 않는 1 이상 45 이하의 자연수이면 예외가 발생하지 않는다.', () => {
    expect(() => {
      Draw.winning = [8, 10, 23, 34, 38, 45];
      const bonus = 5;

      Draw.validateBonusNumber(bonus);
    }).not.toThrow('[ERROR]');
  });
});

afterAll((done) => {
  Console.close();
  done();
});
