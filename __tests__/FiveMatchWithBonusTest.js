const FiveMatchWithBonus = require('../src/FiveMatchWithBonus');
const { PRIZE } = require('../src/constant/Constant');

const mockCheckRule = () => {
  FiveMatchWithBonus.checkRule = jest.fn(() => true);
};

describe('FiveMatchWithBonus 클래스 테스트', () => {
  test('totalReward메소드는 2등 상금과 당첨 횟수를 곱한 값을 반환한다.', () => {
    mockCheckRule();
    const fiveMatchWithBonus = new FiveMatchWithBonus([1, 2, 3, 4, 5, 6]);
    fiveMatchWithBonus.count = 2;
    expect(fiveMatchWithBonus.totalReward()).toBe(
      PRIZE.SECOND.MONEY * fiveMatchWithBonus.count,
    );
  });
});
