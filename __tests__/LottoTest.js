const { createTestScheduler } = require('jest');
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
  test('보너스 번호가 로또 번호에 중복되면 예외가 발생한다.', () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.bonusExecption(parseInt(1));
    }).toThrow('[ERROR]');
  });

  test('몇개 맞췄는지 테스트 => winningCount = 6 ', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.compare({ 0: [1, 2, 3, 4, 5, 6] });
    expect(lotto.winningCount).toEqual(6);
  });

  test('몇개 맞췄는지 테스트 => winningCount = 5 ', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.compare({ 0: [1, 2, 3, 4, 5, 7] });
    expect(lotto.winningCount).toEqual(5);
  });

  test('몇개 맞췄는지 테스트 => winningCount = 4 ', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.compare({ 0: [1, 2, 3, 4, 7, 12] });
    expect(lotto.winningCount).toEqual(4);
  });

  test('몇개 맞췄는지 테스트 => winningCount = 3 ', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.compare({ 0: [1, 2, 3, 7, 12, 33] });
    expect(lotto.winningCount).toEqual(3);
  });

  test('몇개 맞췄는지 테스트 => winningCount = 2 ', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.compare({ 0: [1, 2, 7, 9, 12, 33] });
    expect(lotto.winningCount).toEqual(2);
  });

  test('몇개 맞췄는지 테스트 => winningCount = 1 ', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.compare({ 0: [1, 7, 9, 12, 28, 33] });
    expect(lotto.winningCount).toEqual(1);
  });

  test('몇개 맞췄는지 테스트 => winningCount = 0 ', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.compare({ 0: [7, 9, 12, 28, 33, 42] });
    expect(lotto.winningCount).toEqual(0);
  });
});
