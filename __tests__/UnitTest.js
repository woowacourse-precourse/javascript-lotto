const calculateEarnings = require('../src/forTest');

describe('수익률 계산 테스트', () => {
  test('5장 사서 5등 1개 당첨', () => {
    expect(calculateEarnings([1, 0, 0, 0, 0], 5000)).toBe((5000 / 5000) * 100);
  });

  test('1장 사서 1등 1개 당첨', () => {
    expect(calculateEarnings([0, 0, 0, 0, 1], 1000)).toBe(
      (2000000000 / 1000) * 100
    );
  });

  test('10장 사서 2등 2개 당첨', () => {
    expect(calculateEarnings([0, 0, 0, 2, 0], 10000)).toBe(
      ((30000000 * 2) / 10000) * 100
    );
  });

  test('100장 사서 당첨 없음', () => {
    expect(calculateEarnings([0, 0, 0, 0, 0], 100000)).toBe((0 / 100000) * 100);
  });
});
