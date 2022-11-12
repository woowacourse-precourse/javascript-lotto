const printSummary = require('../src/test');

describe('당첨 내역 출력 테스트', () => {
  test('1등 당첨 1개', () => {
    expect(printSummary([0, 0, 0, 0, 1])).toEqual();
  });

  test('5등 당첨 10개', () => {
    expect(printSummary([10, 0, 0, 0, 0])).toEqual();
  });

  test('2등 당첨 2개', () => {
    expect(printSummary([0, 0, 0, 2, 0])).toEqual();
  });

  test('3등 당첨 1개', () => {
    expect(printSummary([0, 0, 1, 0, 0])).toEqual();
  });
});
