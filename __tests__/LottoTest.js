const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 0, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 45보다 크면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 46, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 숫자 배열을 오름차순 정렬한다.', () => {
    const lotto = new Lotto([4, 3, 2, 5, 6, 1]);
    const sortedNumbers = lotto.getNumbers();

    expect(sortedNumbers).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
