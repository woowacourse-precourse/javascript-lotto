const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('금액 3000원 입력시 로또 3장 구입하여햐한다.', () => {
    let lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    let result = lotto.purchased('3000');

    expect(result.length).toStrictEqual(3);
  });

  test('로또 한장 구매후 5개 번호가 맞는경우', () => {
    let lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    let result = lotto.luckyNumberCheck(
      ['6', '30', '22', '16', '15', '41'],
      [[6, 16, 30, 22, 15, 44]],
      '10'
    );

    expect(result).toStrictEqual([5]);
  });

  test('로또 한장 구매후 5개 번호와 보너스 번호가 맞는경우', () => {
    let lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    let result = lotto.luckyNumberCheck(
      ['6', '30', '22', '16', '15', '41'],
      [[6, 16, 30, 22, 15, 44]],
      '41'
    );

    expect(result).toStrictEqual([5.5]);
  });

  test('5등 3명, 3등 1명, 2등1명 당첨', () => {
    let lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    let result = lotto.winResultList([2, 5, 3, 5.5, 3, 3]);

    expect(result).toStrictEqual([3, 0, 1, 1, 0]);
  });

  test('로또 5개 구입후 수익 평균 구하기 5등3번 당첨', () => {
    let lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    let result = lotto.sumResult([3, 0, 0, 0, 0], new Array(5));

    expect(result).toBe(300);
  });

  test('보너스 번호 입력시 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    let lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(() => {
      lotto.validateBonusNumber('3', ['1', '3', '29', '45', '3', '7']);
    }).toThrow('[ERROR]');
  });
});
