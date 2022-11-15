const FourMatch = require('../src/FourMatch');
const { PRIZE } = require('../src/constant/Constant');

describe('FourMatch 클래스 테스트', () => {
  test('checkRule메소드는 당첨번호와 로또가 4개 수가 일치한지 확인한다.', () => {
    const fourMatch = new FourMatch([1, 2, 3, 4, 5, 6]);
    expect(fourMatch.checkRule({ checkSameNumber: () => 4 })).toBeTruthy();
  });

  test('totalReward메소드는 4등 상금과 당첨 횟수를 곱한 값을 반환한다.', () => {
    const fourMatch = new FourMatch([1, 2, 3, 4, 5, 6]);
    fourMatch.count = 2;
    expect(fourMatch.totalReward()).toBe(PRIZE.FOURTH.MONEY * fourMatch.count);
  });
});
