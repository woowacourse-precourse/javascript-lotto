const WinStatistics = require('../src/components/WinStatistics');

describe('당첨 통계 클래스 테스트', () => {
  test('로또를 비교한 결과로 올바른 당첨 통계를 내는지 확인한다.', () => {
    const results = [
      { win: 6, bonus: false },
      { win: 5, bonus: true },
      { win: 5, bonus: false },
      { win: 4, bonus: false },
      { win: 3, bonus: false },
    ];

    expect(WinStatistics.getWinStatistics(results)).toEqual({
      firstPlace: 1,
      secondPlace: 1,
      thirdPlace: 1,
      fourthPlace: 1,
      fifthPlace: 1,
    });
  });
});
