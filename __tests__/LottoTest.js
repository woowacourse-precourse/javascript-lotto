const { createTestScheduler } = require('jest');
const Lotto = require('../src/Lotto');

describe('로또 클래스 예외 테스트', () => {
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
  test('로또 번호가 숫자가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, '숫자 5', 6]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 로또 번호에 중복되면 예외가 발생한다.', () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.bonusExecption(parseInt(1));
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 숫자가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.bonusExecption('로또');
    }).toThrow('[ERROR]');
  });
});

describe('로또 클래스 로또 추첨 테스트', () => {
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

  test('등수별 당첨 용지 개수 테스트 => (first, second, third, fourth, fifth)Count', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.bonusNumber = parseInt(10);
    lotto.compare({
      0: [1, 2, 3, 4, 5, 6],
      1: [1, 2, 3, 4, 5, 10],
      2: [1, 2, 3, 4, 6, 10],
      3: [1, 2, 3, 4, 5, 42],
      4: [1, 2, 3, 4, 5, 23],
      5: [1, 2, 3, 4, 5, 33],
      6: [1, 2, 3, 4, 30, 42],
      7: [1, 2, 3, 4, 10, 42],
      8: [1, 2, 3, 18, 23, 42],
      9: [1, 2, 3, 10, 23, 42],
    });
    expect(lotto.firstCount).toEqual(1);
    expect(lotto.secondCount).toEqual(2);
    expect(lotto.thirdCount).toEqual(3);
    expect(lotto.fourthCount).toEqual(2);
    expect(lotto.fifthCount).toEqual(2);
  });
});
