const SixMatch = require('../src/SixMatch');
const { PRIZE } = require('../src/constant/Constant');

describe('SixMatch 클래스 테스트', () => {
  test('checkRule메소드는 당첨번호와 로또가 6개 수가 일치한지 확인한다.', () => {
    const sixMatch = new SixMatch([1, 2, 3, 4, 5, 6]);
    expect(sixMatch.checkRule({ checkSameNumber: () => 6 })).toBeTruthy();
  });

  test('totalReward메소드는 1등 상금과 당첨 횟수를 곱한 값을 반환한다.', () => {
    const sixMatch = new SixMatch([1, 2, 3, 4, 5, 6]);
    sixMatch.count = 2;
    expect(sixMatch.totalReward()).toBe(PRIZE.FIRST.MONEY * sixMatch.count);
  });
});
