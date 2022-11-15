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

  test('로또 번호에 6개가 안될때가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4]);
    }).toThrow('[ERROR]');
  });

  test('getNumberString', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.getNumberString([1, 2, 3, 4, 5, 6])).toEqual(
      '[1, 2, 3, 4, 5, 6]'
    );
  });

  test('getCountMatches', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    // 1등 일때
    expect(lotto.getCountMatches([1, 2, 3, 4, 5, 6], 7)).toEqual(6);
    // 2등 일때
    expect(lotto.getCountMatches([1, 2, 3, 4, 5, 7], 6)).toEqual(5.5);
    // 3등 일때
    expect(lotto.getCountMatches([1, 2, 3, 4, 5, 7])).toEqual(5);
    // 4등 일때
    expect(lotto.getCountMatches([1, 2, 3, 4, 7, 8])).toEqual(4);
    // 5등 일때
    expect(lotto.getCountMatches([1, 2, 3, 7, 8, 9])).toEqual(3);
  });
});
