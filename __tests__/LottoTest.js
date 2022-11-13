const Lotto = require('../src/Lotto');
const { ERROR_MSG } = require('../src/Constant');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MSG.only6Numbers);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MSG.duplicateNumbers);
  });

  test('로또 번호에 1 미만 45 초과의 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([45, 2, 0, 47, 5, 6]);
    }).toThrow(ERROR_MSG.outOfRange);
  });
});
