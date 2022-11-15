const { Lotto } = require('../src/Lotto');
const LottoList = require('../src/LottoList');

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

  test('로또 번호가 1~45의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 99]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호와 당첨 번호 비교', () => {
    const lottoNumber = [1, 2, 3, 4, 5, 6];
    const numbers = ['1', '2', '3', '4', '5', '7'];

    const lotto = new Lotto(lottoNumber);
    const result = lotto.countLotto(lottoNumber, numbers);

    expect(result).toBe(5);
  });

  test('로또 번호와 보너스 번호 비교', () => {
    const count = 5;
    const lottoNumber = [1, 2, 3, 4, 5, 6];
    const bonus = 6;

    const lotto = new Lotto(lottoNumber);
    const result = lotto.compareBonus(count, lottoNumber, bonus);

    expect(result).toBe(5.5);
  });

  test('로또 순위에 따른 당첨금 비교', () => {
    const statsNumber = [0, 0, 0, 1, 1];
    const lottoNumber = [1, 2, 3, 4, 5, 6];

    const lotto = new Lotto(lottoNumber);
    const result = lotto.prizeCalculation(statsNumber);

    expect(result).toBe(55000);
  });

  test('로또 순위에 따른 수익률 비교', () => {
    const winningMoney = 5000;
    const lottoNumber = [1, 2, 3, 4, 5, 6];
    const lottoList = [
      [1, 2, 3, 4, 5, 6, 7],
      [11, 12, 13, 14, 15, 16, 17],
    ];

    const lotto = new Lotto(lottoNumber);
    const result = lotto.yieldCalculation(winningMoney, lottoList);

    expect(result).toBe('250.0');
  });
});

describe('로또 빌더 기능 테스트', () => {
  test('구매한 금액만큼의 로또 갯수', () => {
    const input = '8000';

    const lottoList = new LottoList();
    const result = lottoList.countAmountLotto(input);
    expect(result).toBe(8);
  });
});
