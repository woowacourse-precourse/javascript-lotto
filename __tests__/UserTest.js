const LottoGame = require('../src/LottoGame');
const User = require('../src/User');
const Lotto = require('../src/Lotto');

describe('User 클래스 테스트', () => {
  test('createStatisticsText 메서드는 당첨 통계를 생성하여 반환', () => {
    const lottoGame = new LottoGame();
    lottoGame.setWinningNumbers('8, 21, 23, 31, 32, 33');
    lottoGame.setBonusNumber('34');

    const numbers = [
      [8, 21, 23, 31, 32, 33],
      [8, 21, 23, 31, 32, 34],
      [8, 21, 23, 31, 32, 35],
      [8, 21, 23, 31, 36, 37],
      [8, 21, 23, 36, 37, 38],
    ];
    const lottos = numbers.map(number => new Lotto(number));

    const user = new User(lottoGame);
    user.setLottoTickets(lottos);
    const statistics = user.createStatisticsText();

    expect(statistics).toEqual([
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
      '총 수익률은 40,631,100.0%입니다.',
    ]);
  });
});
