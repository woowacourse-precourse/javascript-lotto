const WinningResult = require('../src/WinningResult');

test('당첨 금액 계산하기', () => {
  const set = new Set();
  set.add(JSON.stringify([1, 2, 3, 4, 5, 6]));
  set.add(JSON.stringify([2, 3, 4, 5, 6, 7]));
  const winningResult = new WinningResult(set, [1, 2, 3, 4, 5, 6], 7);

  expect(winningResult.Result).toEqual({
    5000: 0,
    50000: 0,
    1500000: 0,
    30000000: 1,
    2000000000: 1,
  });
  expect(winningResult.Sum).toBe(2030000000);
});

test('FIRST_PLACE 수익률 계산', () => {
  const set = new Set();
  set.add(JSON.stringify([1, 2, 3, 4, 5, 6]));
  const winningResult = new WinningResult(set, [1, 2, 3, 4, 5, 6], 7);

  expect(winningResult.setYield()).toBe('200000000.0');
});

test('SECOND_PLACE 수익률 계산', () => {
  const set = new Set();
  set.add(JSON.stringify([1, 2, 3, 4, 5, 6]));
  const winningResult = new WinningResult(set, [1, 2, 3, 4, 7, 6], 5);

  expect(winningResult.setYield()).toBe('3000000.0');
});

test('THIRD_PLACE 수익률 계산', () => {
  const set = new Set();
  set.add(JSON.stringify([1, 2, 3, 4, 5, 6]));
  const winningResult = new WinningResult(set, [1, 2, 3, 4, 5, 8], 9);

  expect(winningResult.setYield()).toBe('150000.0');
});

test('FOURTH_PLACE 수익률 계산', () => {
  const set = new Set();
  set.add(JSON.stringify([1, 2, 3, 4, 5, 6]));
  const winningResult = new WinningResult(set, [1, 2, 3, 4, 7, 8], 9);

  expect(winningResult.setYield()).toBe('5000.0');
});

test('FIFTH_PLACE 수익률 계산', () => {
  const set = new Set();
  set.add(JSON.stringify([1, 2, 3, 4, 5, 6]));
  const winningResult = new WinningResult(set, [1, 2, 3, 12, 7, 8], 9);

  expect(winningResult.setYield()).toBe('500.0');
});
