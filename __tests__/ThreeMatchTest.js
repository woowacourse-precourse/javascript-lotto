const ThreeMatch = require('../src/ThreeMatch');
const { PRIZE } = require('../src/constant/Constant');

describe('ThreeMatch 클래스 테스트', () => {
  test('checkRule메소드는 당첨번호와 로또가 3개 수가 일치한지 확인한다.', () => {
    const threeMatch = new ThreeMatch([1, 2, 3, 4, 5, 6]);
    expect(threeMatch.checkRule({ checkSameNumber: () => 3 })).toBeTruthy();
  });

  test('totalReward메소드는 5등 상금과 당첨 횟수를 곱한 값을 반환한다.', () => {
    const threeMatch = new ThreeMatch([1, 2, 3, 4, 5, 6]);
    threeMatch.count = 2;
    expect(threeMatch.totalReward()).toBe(PRIZE.FIFTH.MONEY * threeMatch.count);
  });
});
