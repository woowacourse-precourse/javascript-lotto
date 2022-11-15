const LottoSeller = require('../src/LottoSeller');

const lottoSeller = new LottoSeller(1000);

describe('LotteSeller 클래스 테스트', () => {
  test('issue(3) 호출시 3개의 만큼 로또 배열 생성', () => {
    lottoSeller.issue(3);

    expect(lottoSeller.lottos).toHaveLength(3);
    expect(lottoSeller.lottos.every((lotto) => lotto
      .every((el) => lotto.length === 6
      && !Number.isNaN(el)
      && el >= 1
      && el <= 45))).toBeTruthy();
  });

  test('countTicket 메서드 동작확인', () => {
    expect(lottoSeller.countTicket('10000')).toBe(10);
    expect(lottoSeller.countTicket('3000')).toBe(3);
    expect(() => { lottoSeller.countTicket('300'); }).toThrow('[ERROR]');
    expect(() => { lottoSeller.countTicket('1800'); }).toThrow('[ERROR]');
  });
});
