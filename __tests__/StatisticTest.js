const Statistic = require('../src/Statistic');
const { RANK } = require('../src/utils/constants');

describe('통계 클래스 테스트', () => {
  const statistic = new Statistic();

  test('로또가 주어지면 일치하는 숫자를 확인한다.', () => {
    const publishedLotto = [1, 2, 3, 4, 5, 7];
    const winningLotto = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const judgeResult = statistic.judgeLotto(winningLotto, bonusNumber, publishedLotto);

    expect(judgeResult).toEqual({
      numberOfSame: 5,
      isBonusNumberSame: true,
    });
  });

  test('일치하는 숫자의 수에 따라 등수를 정한다. ', () => {
    const judgeResult = {
      numberOfSame: 5,
      isBonusNumberSame: true,
    };
    const rankResult = statistic.judgeRank(judgeResult);

    expect(rankResult).toEqual(RANK.SECOND);
  });

  test('해당 등수의 count를 1 증가시킨다.', () => {
    const rank = RANK.SECOND;
    statistic.increaseRankCount(rank);
    const stat = statistic.getStat();

    expect(stat[rank]).toEqual(1);
  });
});

describe('통계 클래스 최종 테스트', () => {
  test('로또를 통계에 추가한다.', () => {
    const statistic = new Statistic();
    const publishedLotto = [1, 2, 3, 4, 5, 7];
    const winningLotto = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    statistic.putInStat(winningLotto, bonusNumber, publishedLotto);
    const result = statistic.getStat();

    expect(result[RANK.SECOND]).toEqual(1);
  });
});
