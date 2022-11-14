const WinningResult = require('../src/WinningResult');

test('FIRST_PLACE', () => {
  const set = new Set();
  set.add(JSON.stringify([1, 2, 3, 4, 5, 6]));
  const winningResult = new WinningResult(set, [1, 2, 3, 4, 5, 6], 7);

  expect(winningResult.setYield()).toBe('200000000.0');
});

test('SECOND_PLACE', () => {
  const set = new Set();
  set.add(JSON.stringify([1, 2, 3, 4, 5, 6]));
  const winningResult = new WinningResult(set, [1, 2, 3, 4, 7, 6], 5);

  expect(winningResult.setYield()).toBe('3000000.0');
});

test('THIRD_PLACE', () => {
  const set = new Set();
  set.add(JSON.stringify([1, 2, 3, 4, 5, 6]));
  const winningResult = new WinningResult(set, [1, 2, 3, 4, 5, 8], 9);

  expect(winningResult.setYield()).toBe('150000.0');
});

test('FOURTH_PLACE', () => {
  const set = new Set();
  set.add(JSON.stringify([1, 2, 3, 4, 5, 6]));
  const winningResult = new WinningResult(set, [1, 2, 3, 4, 7, 8], 9);

  expect(winningResult.setYield()).toBe('5000.0');
});

test('FIFTH_PLACE', () => {
  const set = new Set();
  set.add(JSON.stringify([1, 2, 3, 4, 5, 6]));
  const winningResult = new WinningResult(set, [1, 2, 3, 12, 7, 8], 9);

  expect(winningResult.setYield()).toBe('500.0');
});
