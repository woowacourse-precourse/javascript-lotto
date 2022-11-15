const Message = require('../src/Message');

const { PRIZE, WIN_MONEY } = require('../src/constants/prize');

describe('Message 클래스 테스트', () => {
  test('로또 갯수 메시지를 반환한다.', () => {
    const lottoCountMessage = Message.getLottoCountMessage(100);

    expect(lottoCountMessage).toBe('100개를 구매했습니다.');
  });

  test('로또 번호 메시지를 반환한다.', () => {
    const lottoNumbersMessage = Message.getLottoNumbersMessage([1, 5, 7, 14, 24, 49]);

    expect(lottoNumbersMessage).toBe('[1, 5, 7, 14, 24, 49]');
  });

  test('결과 메시지를 반환한다.', () => {
    const { FIRST, THIRD, FOURTH, FIFTH } = PRIZE;
    const prizes = [FIRST, THIRD, FOURTH, FIFTH];

    prizes.forEach((prize, i) => {
      const matchCount = prize > PRIZE.SECOND ? 8 - prize : 7 - prize;
      const winMoney = WIN_MONEY[prize].toLocaleString('ko-KR');
      const prizeCount = i;

      const resultMessage = Message.getResultMessage(prize, prizeCount);

      expect(resultMessage).toBe(`${matchCount}개 일치 (${winMoney}원) - ${i}개`);
    });
  });

  test('2등 결과 메시지는 보너스 볼 문자열을 포함한다.', () => {
    const resultMessage = Message.getResultMessage(PRIZE.SECOND, 2);

    expect(resultMessage).toContain('보너스 볼 일치');
  });

  test('수익률 메시지를 반환한다.', () => {
    const profitRate = '10.1';
    const profitRateMessage = Message.getProfitRateMessage(profitRate);

    expect(profitRateMessage).toBe('총 수익률은 10.1%입니다.');
  });
});
