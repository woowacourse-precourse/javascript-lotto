const User = require('../src/User');
const MissionUtils = require('@woowacourse/mission-utils');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('유저 테스트', () => {
  test('돈으로 로또사기 6000원', () => {
    const user = new User();
    const lottos = user.buyLottos(6000);
    expect(lottos.length).toBe(6);
  });

  test('수익률 계산하기', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
    ]);
    const user = new User();
    user.buyLottos(2000);
    user.checkLottos([8, 21, 23, 3, 5, 11], 44);
    expect(user.checkRateOfReturn()).toBe('500.0');
  });

  test('수익금 계산하기', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
    ]);
    const user = new User();
    user.buyLottos(2000);
    user.checkLottos([8, 21, 23, 3, 5, 41], 44);
    expect(user.calculateRevenue()).toBe(50000);
  });
});
