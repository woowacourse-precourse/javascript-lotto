const getSummary = require('../src/WinList');

describe('당첨 내역 테스트', () => {
  test('2등 당첨 1개', () => {
    expect(getSummary([0, 15, 1, 2, 1, 0])).toEqual([0, 0, 0, 0, 1]);
  });

  test('1등 당첨 1개', () => {
    expect(getSummary([6])).toEqual([0, 0, 0, 1, 0]);
  });

  test('5등 당첨 10개', () => {
    expect(getSummary([3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 2, 0])).toEqual([
      10, 0, 0, 0, 0,
    ]);
  });

  test('1,2,3,4,5등 모두 당첨', () => {
    expect(getSummary([6, 5, 4, 3, 15])).toEqual([1, 1, 1, 1, 1]);
  });
});
