const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  test('로또 번호에 숫자형이 아닌 문자가 들어있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['a', 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 개수가 6개보다 적으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1 ~ 45를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호를 오름차순으로 정렬 후 반환한다.', () => {
    const numbers = ['6', 5, 4, 3, 2, 1];
    const expectedOutput = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(numbers);
    expect(lotto.getNumbers()).toStrictEqual(expectedOutput);
  });
});
