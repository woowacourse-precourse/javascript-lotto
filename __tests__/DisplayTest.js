const Display = require('../src/Display');

describe('로또 메시지 출력 테스트', () => {
  test('사용자 입력값 안내 메시지', () => {
    const types = ['PAYMENT', 'WINNING_NUMBER_INPUT', 'BONUS_NUMBER_INPUT', 'RESULT'];
    const message = [
      '구입금액을 입력해 주세요.\n',
      '당첨 번호를 입력해 주세요.\n',
      '보너스 번호를 입력해 주세요.\n',
      '당첨 통계\n---',
    ];

    types.forEach((_, i) => expect(Display.guidance(types[i])).toEqual(message[i]));
  });

  test('로또 통계 관련 정보 메시지', () => {
    const types = ['QUANTITY', 'PROFITS'];
    const info = [10, 20.1];
    const message = ['10개를 구매했습니다.', '총 수익률은 20.1%입니다.'];

    types.forEach((_, i) => expect(Display.statistics(types[i], info[i])).toEqual(message[i]));
  });

  test('로또 정보', () => {
    const types = ['PRICE', 'VOLUME', 'RANGE_START', 'RANGE_END'];
    const message = [1000, 6, 1, 45];
    types.forEach((_, i) => expect(Display.info(types[i])).toEqual(message[i]));
  });

  test('에러 메시지', () => {
    const types = ['UNACCEPTABLE_PAYMENT', 'DUPLICATED', 'OUT_OF_RANGE', 'OUT_OF_VOLUME'];
    const message = [
      '[ERROR] 금액은 1000원으로 나눠 떨어져야 합니다.',
      '[ERROR] 중복된 숫자가 입력되었습니다.',
      '[ERROR] 1부터 45까지의 숫자만 입력해주세요.',
      '[ERROR] 당첨 및 로또 번호의 경우 6개의 숫자, 보너스 번호의 경우 1개의 숫자만 입력해주세요.',
    ];
    types.forEach((_, i) => expect(Display.error(types[i])).toEqual(message[i]));
  });

  test('등수 정보', () => {
    const rankings = ['FIFTH', 'FOURTH', 'THIRD', 'SECOND', 'FIRST'];
    const info = [
      { winning: 3, prize: '5,000' },
      { winning: 4, prize: '50,000' },
      { winning: 5, bonus: 0, prize: '1,500,000' },
      { winning: 5, bonus: 1, prize: '30,000,000' },
      { winning: 6, prize: '2,000,000,000' },
    ];

    rankings.forEach((_, i) => expect(Display.rankingInfo(rankings[i])).toEqual(info[i]));
  });

  test('등수 통계 정보 메시지', () => {
    const inputs = [
      ['FIFTH', 3],
      ['SECOND', 1],
    ];
    const messages = ['3개 일치 (5,000원) - 3개', '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개'];

    inputs.forEach((input, i) => expect(Display.rankingStatistics(...input)).toEqual(messages[i]));
  });

  test('로또 포멧', () => {
    expect(Display.lottoFormat([1, 2, 3, 4, 5, 6])).toEqual('[1, 2, 3, 4, 5, 6]');
  });
});
