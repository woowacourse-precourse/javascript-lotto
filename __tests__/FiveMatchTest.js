const FiveMatch = require('../src/FiveMatch');
const { PRIZE } = require('../src/constant/Constant');

describe('FiveMatch 클래스 테스트', () => {
  test('checkRule메소드는 당첨번호와 로또가 5개 수가 일치한지 확인한다.', () => {
    const fiveMatch = new FiveMatch([1, 2, 3, 4, 5, 6]);
    expect(fiveMatch.checkRule({ checkSameNumber: () => 5 })).toBeTruthy();
  });

  test('totalReward메소드는 3등 상금과 당첨 횟수를 곱한 값을 반환한다.', () => {
    const fiveMatch = new FiveMatch([1, 2, 3, 4, 5, 6]);
    fiveMatch.count = 2;
    expect(fiveMatch.totalReward()).toBe(PRIZE.THIRD.MONEY * fiveMatch.count);
  });
});
