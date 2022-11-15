const LottoStore = require('../src/LottoStore');
const Lotto = require('../src/Lotto');

describe('LottoStore 클래스 테스트', () => {
  test('sellLottoTickets 메서드는 구입금액만큼의 로또를 생성하여 반환', () => {
    const lottoTickets = LottoStore.sellLottoTickets('8000');

    lottoTickets.forEach(ticket => expect(ticket).toBeInstanceOf(Lotto));
    expect(lottoTickets.length).toBe(8);
  });
});
