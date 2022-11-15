const { getAscending, getRateOfReturn, getEarnedAmount, getMatchedNumberCount } = require('../src/utils/common');

describe('common 유틸 테스트', () => {
  test('getAscending(numbers) - 오름차순으로 정렬한 numbers를 리턴한다.', () => {
    const numbers = [1, 3, 4, 2, 6, 5];

    const ascendingNumbers = getAscending(numbers);

    expect(ascendingNumbers).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test.each([
    [70000, 230000, 30.4],
    [2000005000, 3000, 66666833.3],
    [0, 1000, 0],
  ])('getRateOfReturn(earnedAmount, purchasedAmount) - 로또 수익률을 구할 수 있다. (소수점 둘째 자리에서 반올림)', (earnedAmount, purchasedAmount, result) => {
    const rateOfReturn = getRateOfReturn(earnedAmount, purchasedAmount);

    expect(rateOfReturn).toEqual(result);
  });

  test('getEarnedAmount(statistic) - 구매한 로또 전체의 당첨금을 구할 수 있다.', () => {
    const statistic = {
      FIRST: 1,
      SECOND: 1,
      THIRD: 1,
      FOURTH: 1,
      FIFTH: 2,
    };

    const earnedAmount = getEarnedAmount(statistic);

    expect(earnedAmount).toEqual(2031560000);
  });

  test('getMatchedNumberCount(lottoWinningNumbers, generatedLotto) - 당첨번호와 로또번호를 비교하여 일치하는 번호의 개수를 구할 수 있다.', () => {
    const lottoWinningNumbers = [1, 2, 3, 4, 5, 6];
    const generatedLottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 44, 45],
      [1, 2, 3, 43, 44, 45],
      [1, 2, 42, 43, 44, 45],
      [1, 41, 42, 43, 44, 45],
      [40, 41, 42, 43, 44, 45],
    ];
    const result = [6, 5, 4, 3, 2, 1, 0];

    generatedLottos.forEach((generatedLotto, index) => {
      const matchedNumberCount = getMatchedNumberCount(lottoWinningNumbers, generatedLotto);

      expect(matchedNumberCount).toEqual(result[index]);
    });
  });
});
