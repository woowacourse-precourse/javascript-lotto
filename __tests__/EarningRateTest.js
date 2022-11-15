const EarningRate = require('../src/components/EarningRate');

describe('수익률 클래스 테스트', () => {
  test('당첨 통계와 구입 금액을 기반으로 올바른 수익률을 내는지 확인한다.', () => {
    const winPlace = {
      firstPlace: 0,
      secondPlace: 0,
      thirdPlace: 0,
      fourthPlace: 0,
      fifthPlace: 1,
    };
    const purchase = 8000;

    expect(EarningRate.getEarningRate({ winPlace, purchase })).toBe(62.5);
  });
});
