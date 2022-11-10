const NumberValidator = require('./NumberValidator');

describe('NumberValidator 테스트', () => {
  test('로또 번호가 1~45 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => NumberValidator.execute(0)).toThrow(
      new Error('[ERROR] 로또 번호는 1부터 45까지의 수만 가능합니다.')
    );
  });

  test('로또 번호가 1~45 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => NumberValidator.execute(46)).toThrow(
      new Error('[ERROR] 로또 번호는 1부터 45까지의 수만 가능합니다.')
    );
  });
});
