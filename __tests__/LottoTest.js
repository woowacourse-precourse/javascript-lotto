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

  test('통계를 계산해 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 7;
    const lottos = [
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 7, 8, 9],
      [10, 11, 12, 13, 14, 15],
      [10, 11, 12, 13, 14, 15],
      [10, 11, 12, 13, 14, 15],
    ];
    const expected = {
      1: 0,
      2: 1,
      3: 0,
      4: 0,
      5: 1,
    };

    expect(lotto.getStats(lottos, bonusNumber)).toEqual(expected);
  });
});
