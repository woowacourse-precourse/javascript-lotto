const WinningRank = require('../src/WinningRank');

describe('로또 당첨 랭크 확인', () => {
  const winningRank = new WinningRank();

  test('당첨 개수 출력', () => {
    const lottoTicket = [1, 2, 3, 4, 5, 6];
    const winningList = [1, 2, 3, 4, 5, 7];
    expect(winningRank.getWinningMatchCount(lottoTicket, winningList)).toEqual(
      5
    );
  });

  test('보너스 여부 출력', () => {
    const lottoTicket = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 6;
    expect(winningRank.getBonusMatchCount(lottoTicket, bonusNumber)).toEqual(
      0.5
    );
  });

  test('3등 확인', () => {
    const lottoTicket = [1, 2, 3, 4, 5, 6];
    const winningList = [1, 2, 3, 4, 5, 17];
    const bonusNumber = 10;

    expect(
      winningRank.calculateLottoRank(lottoTicket, winningList, bonusNumber)
    ).toEqual(5);
  });

  test('2등 보너스 확인', () => {
    const lottoTicket = [1, 2, 3, 4, 5, 6];
    const winningList = [1, 2, 3, 4, 5, 7];
    const bonusNumber = 6;

    expect(
      winningRank.calculateLottoRank(lottoTicket, winningList, bonusNumber)
    ).toEqual(5.5);
  });

  test('각 로또번호마다 당첨 개수 배열 입력 확인', () => {
    const lottoTickets = [
      [1, 2, 3, 4, 5, 6],
      [1, 3, 5, 7, 9, 11],
    ];
    const winningList = [1, 2, 3, 4, 5, 7];
    const bonusNumber = 6;

    expect(
      winningRank.getMatchLotto(lottoTickets, winningList, bonusNumber)
    ).toEqual([5.5, 4]);
  });
});
