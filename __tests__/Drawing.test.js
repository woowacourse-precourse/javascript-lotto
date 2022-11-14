const User = require('../src/User');
const Drawing = require('../src/Drawing');

describe('로또 하나에 대한 결과를 올바르게 내는지 테스트한다.', () => {
  test('3개를 맞추고, 보너스 숫자를 맞춘 경우 [3, true]를 반환한다.', () => {
    expect(new Drawing().getMatchCount([2, 4, 6, 12, 14, 16], [1, 12, 14, 16, 20, 25], 6)).toEqual([3, true]);
  });
  test('3개를 맞추고, 보너스 숫자를 맞추지 못한 경우 [3, false]를 반환한다.', () => {
    expect(new Drawing().getMatchCount([7, 17, 27, 37, 40, 43], [17, 27, 37, 38, 39, 41], 45)).toEqual([3, false]);
  });
  test('4개를 맞추고, 보너스 숫자를 맞춘 경우 [4, true]를 반환한다.', () => {
    expect(new Drawing().getMatchCount([20, 21, 22, 23, 24, 28], [20, 21, 22, 24, 29, 30], 28)).toEqual([4, true]);
  });
  test('4개를 맞추고, 보너스 숫자를 맞추지 못한 경우 [4, false]를 반환한다.', () => {
    expect(new Drawing().getMatchCount([10, 20, 30, 40, 44, 45], [20, 30, 40, 41, 42, 44], 1)).toEqual([4, false]);
  });
  test('5개를 맞추고, 보너스 숫자를 맞춘 경우 [5, true]를 반환한다.', () => {
    expect(new Drawing().getMatchCount([3, 5, 7, 10, 13, 21], [5, 7, 10, 13, 21, 33], 3)).toEqual([5, true]);
  });
  test('5개를 맞추고, 보너스 숫자를 맞추지 못한 경우 [5, false]를 반환한다.', () => {
    expect(new Drawing().getMatchCount([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 7], 10)).toEqual([5, false]);
  });
  test('6개를 맞추고, 보너스 숫자를 맞추지 못한 경우 [6, false]를 반환한다.', () => {
    expect(new Drawing().getMatchCount([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], 7)).toEqual([6, false]);
  });
});

describe('상금을 올바르게 계산하는지 테스트한다.', () => {
  test('5등만 당첨된 경우, 5000을 반환한다.', () => {
    expect(new Drawing().calcReward({ fifth: 1, fourth: 0, third: 0, second: 0, first: 0 })).toEqual(5000);
  });
  test('4등만 당첨된 경우, 50000을 반환한다.', () => {
    expect(new Drawing().calcReward({ fifth: 0, fourth: 1, third: 0, second: 0, first: 0 })).toEqual(50000);
  });
  test('3등만 당첨된 경우, 1500000을 반환한다.', () => {
    expect(new Drawing().calcReward({ fifth: 0, fourth: 0, third: 1, second: 0, first: 0 })).toEqual(1500000);
  });
  test('2등만 당첨된 경우, 30000000을 반환한다.', () => {
    expect(new Drawing().calcReward({ fifth: 0, fourth: 0, third: 0, second: 1, first: 0 })).toEqual(30000000);
  });
  test('1등만 당첨된 경우, 2000000000을 반환한다.', () => {
    expect(new Drawing().calcReward({ fifth: 0, fourth: 0, third: 0, second: 0, first: 1 })).toEqual(2000000000);
  });
  test('낙첨인 경우, 0을 반환한다.', () => {
    expect(new Drawing().calcReward({ fifth: 0, fourth: 0, third: 0, second: 0, first: 0 })).toEqual(0);
  });
  test('모든 등수에 당첨인 경우, 2031555000을 반환한다.', () => {
    expect(new Drawing().calcReward({ fifth: 1, fourth: 1, third: 1, second: 1, first: 1 })).toEqual(2031555000);
  });
});

describe('수익률을 올바르게 계산하는지 테스트한다.', () => {
  test('100000원으로 낙첨인 경우 0을 반환한다.', () => {
    const drawing = new Drawing();
    drawing.user = new User(100000);
    expect(drawing.calcRevenue(0)).toEqual(0);
  });
  test('100000원으로 5000원을 획득한 경우 5를 반환한다.', () => {
    const drawing = new Drawing();
    drawing.user = new User(100000);
    expect(drawing.calcRevenue(5000)).toEqual(5);
  });
  test('100000000원으로 5000원을 획득한 경우 0을 반환한다.', () => {
    const drawing = new Drawing();
    drawing.user = new User(100000000);
    expect(drawing.calcRevenue(5000)).toEqual(0);
  });
  test('10000000000원으로 5000원을 획득한 경우 0을 반환한다.', () => {
    const drawing = new Drawing();
    drawing.user = new User(10000000000);
    expect(drawing.calcRevenue(5000)).toEqual(0);
  });
  test('3000원으로 20000000000원을 획득한 경우 666666666.7을 반환한다.', () => {
    const drawing = new Drawing();
    drawing.user = new User(3000);
    expect(drawing.calcRevenue(20000000000)).toEqual(666666666.7);
  });
});
