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

  // 아래에 추가 테스트 작성 가능
  test('3개 일치', () => {
    const lotto = new Lotto([3, 6, 19, 30, 41, 45]);
    const matchNumbers = lotto.countMatchNumbers([3, 19, 45, 2, 44, 20], 27);
    expect(matchNumbers).toBe(3);
  });

  test('4개 일치', () => {
    const lotto = new Lotto([3, 6, 19, 30, 41, 45]);
    const matchNumbers = lotto.countMatchNumbers([3, 19, 45, 2, 41, 20], 27);
    expect(matchNumbers).toBe(4);
  });

  test('5개 일치', () => {
    const lotto = new Lotto([3, 6, 19, 30, 41, 45]);
    const matchNumbers = lotto.countMatchNumbers([3, 19, 45, 6, 41, 20], 27);
    expect(matchNumbers).toBe(5);
  });

  test('5개 일치, 보너스 볼 일치', () => {
    const lotto = new Lotto([3, 6, 19, 27, 41, 45]);
    const matchNumbers = lotto.countMatchNumbers([3, 19, 45, 6, 41, 20], 27);
    expect(matchNumbers).toBe('5B');
  });

  test('6개 일치', () => {
    const lotto = new Lotto([3, 6, 19, 30, 41, 45]);
    const matchNumbers = lotto.countMatchNumbers([3, 6, 19, 30, 41, 45], 27);
    expect(matchNumbers).toBe(6);
  });
});
