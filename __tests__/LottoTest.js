const Lotto = require('../src/Lotto');
const { ERROR_MESSAGE } = require('../src/constant/constant');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 개수가 6개가 안되면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.LOTTO.NUMBER_DUPLICATED);
  });

  test('로또 번호는 1부터 45 사이의 숫자가 아니면 예외가 발생한다', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 55]);
    }).toThrow(ERROR_MESSAGE.LOTTO.NUMBER_RANGE);
  });

  test('로또 번호에 숫자가 아닌 문자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'a']);
    }).toThrow(ERROR_MESSAGE.LOTTO.NOT_NUMBER);
  });
});
