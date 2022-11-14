const Lotto = require('../src/Components/Lotto');

describe('로또 클래스 테스트', () => {
  test('로또 번호를 , 단위로 구분하지 않으면 예외가 발생한다', () => {
    expect(() => {
      new Lotto('1.3.5.7.9.11', 8);
    }).toThrow('[ERROR]');
  });

  test('로또 메인 번호의 개수가 6개를 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7], 8);
    }).toThrow('[ERROR]');
  });

  test('로또 보너스 번호의 개수가 1개를 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7], '8 2');
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1 ~ 45 이내의 숫자가 아니라면 예외가 발생한다', () => {
    expect(() => {
      new Lotto([1, 3, 5, 23, 99, 1000], 8);
    }).toThrow('[ERROR]');
    expect(() => {
      new Lotto([1, 3, 5, 7, 9, 10], 10);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5], 8);
    }).toThrow('[ERROR]');
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6], 6);
    }).toThrow('[ERROR]');
  });

  test('번호 일치 개수 확인.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6], 7);
    const [count, bonusCount] = lotto.checkWin([1, 3, 5, 7, 9, 11]);
    const expectCount = 3;
    const expectBonusCount = 1;

    expect(expectCount).toBe(count);
    expect(expectBonusCount).toBe(bonusCount);
  });
});
