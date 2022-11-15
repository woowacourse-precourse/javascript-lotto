const Lotto = require('../src/Lotto');

describe('로또 당첨순위 테스트', () => {
  test('1등 테스트', () => {
    const rank = new Lotto([1, 2, 3, 4, 5, 6]).check([1, 2, 3, 4, 5, 6], 11);
    expect(rank).toBe(1);
  });

  test('2등 테스트 (5개맞춤 + 보너스)', () => {
    const rank = new Lotto([1, 2, 3, 4, 5, 6]).check([1, 2, 3, 4, 5, 10], 6);
    expect(rank).toBe(2);
  });

  test('3등 테스트 (5개맞춤)', () => {
    const rank = new Lotto([1, 2, 3, 4, 5, 6]).check([1, 2, 3, 4, 5, 10], 11);
    expect(rank).toBe(3);
  });

  test('4등 테스트 (4개맞춤)', () => {
    const rank = new Lotto([1, 2, 3, 4, 5, 6]).check([1, 2, 3, 4, 9, 10], 11);
    expect(rank).toBe(4);
  });

  test('5등 테스트 (3개맞춤)', () => {
    const rank = new Lotto([1, 2, 3, 4, 5, 6]).check([1, 2, 3, 8, 9, 10], 11);
    expect(rank).toBe(5);
  });
});
