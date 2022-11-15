const Lotto = require('../src/Lotto');

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

  test('로또 번호의 개수가 6개 미만이면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 오름차순으로 정렬되는지 확인한다.', () => {
    const lotto = new Lotto([3, 21, 1, 44, 33, 7]);
    expect(lotto.getNumbers()).toEqual([1, 3, 7, 21, 33, 44]);
  });

  test('로또 번호가 숫자가 아닌 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 5, 'a', 6, 7, 8]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1미만의 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 5, 0, 6, 7, 8]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 46 이상의 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 5, 11, 22, 33, 46]);
    }).toThrow('[ERROR]');
  });
});
