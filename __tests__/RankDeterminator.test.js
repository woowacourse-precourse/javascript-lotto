const RankDeterminator = require('../src/domain/RankDeterminator');

describe('RankDeterminator 테스트', () => {
  test('getRank()는 로또 등수를 반환한다.', () => {
    const winningNumberData = { winningNumbers: [1, 2, 3, 4, 5, 6], bonusNumber: 7 };

    const rankDeterminator =  new RankDeterminator(winningNumberData);
    const ticket = [1, 2, 3, 4, 5, 6];
    const rank = rankDeterminator.getRank(ticket);

    expect(rank).toBe(1);
  });

  test('2등은 보너스 번호가 일치하는 경우에만 가능하다.', () => {
    const winningNumberData = { winningNumbers: [1, 2, 3, 4, 5, 6], bonusNumber: 7 };
    const rankDeterminator =  new RankDeterminator(winningNumberData);
    const secondaryTicket = [1, 2, 3, 4, 5, 7];
    const thirdTicket = [1, 2, 3, 4, 5, 8];
    const secondRank = rankDeterminator.getRank(secondaryTicket);
    const thirdRank = rankDeterminator.getRank(thirdTicket);

    expect(secondRank).toBe(2);
    expect(thirdRank).toBe(3);
  });
});
