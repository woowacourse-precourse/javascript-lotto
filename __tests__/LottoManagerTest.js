const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('../src/Lotto');
const LottoManager = require('../src/LottoManager');

describe('로또매니저 클래스 테스트', () => {
  test('로또 번호와 당첨 번호를 비교했을 때 숫자 5개가 일치하는 로또 1개가 당첨되는 경우 확인', () => {
    const lottoManager = new LottoManager();
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
      new Lotto([13, 14, 15, 16, 17, 18]),
    ];
    const winning = new Lotto([1, 7, 8, 9, 10, 11]);
    const bonus = 3;
    const { winningArray, profit } = lottoManager.lottosWinningBonus(lottos, winning, bonus);

    expect(winningArray).toEqual([0, 0, 1, 0, 0]);
    expect(profit).toEqual(1500000);
  });

  test('로또 번호와 당첨 번호를 비교했을 때 숫자 5개와 보너스 번호가 일치하는 로또 1개가 당첨되는 경우 확인', () => {
    const lottoManager = new LottoManager();
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
      new Lotto([13, 14, 15, 16, 17, 18]),
    ];
    const winning = new Lotto([1, 7, 8, 9, 10, 11]);
    const bonus = 12;
    const { winningArray, profit } = lottoManager.lottosWinningBonus(lottos, winning, bonus);

    expect(winningArray).toEqual([0, 0, 0, 1, 0]);
    expect(profit).toEqual(30000000);
  });

  test('로또가 한 개도 당첨되지 않은 경우 확인', () => {
    const lottoManager = new LottoManager();
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
      new Lotto([13, 14, 15, 16, 17, 18]),
    ];
    const winning = new Lotto([19, 20, 21, 22, 23, 24]);
    const bonus = 12;
    const { winningArray, profit } = lottoManager.lottosWinningBonus(lottos, winning, bonus);

    expect(winningArray).toEqual([0, 0, 0, 0, 0]);
    expect(profit).toEqual(0);
  });
});

afterAll(() => {
  Console.close();
});
