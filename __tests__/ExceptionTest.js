const Vaildator = require('../src/Lotto');

describe('예외 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Vaildator([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Vaildator([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 숫자가 아니면 예외 발생.', () => {
    expect(() => {
      new Vaildator([1, 2, 3, 4, 5, NaN]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호 범위 벗어나면 예외 발생.', () => {
    expect(() => {
      new Vaildator([0, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });
});
