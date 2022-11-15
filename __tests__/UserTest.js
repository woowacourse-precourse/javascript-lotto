const User = require('../src/User');

describe('User 클래스 테스트', () => {
  test('금액으로 로또 게임을 얼마나 살 수 있는지 계산하는 기능', () => {
    const user = new User();
    user.amount = 10000;
    user.calculateLottoCount();
    expect(user.lottoCount).toEqual(10);
  });

  test('로또 당첨 여부를 계산하는 기능', () => {
    const user = new User();
    expect(
      user.calcHitNumberCount([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])
    ).toEqual(6);
  });

  test('로또 순위를 계산하는 기능:', () => {
    const user = new User();
    expect(user.dicideRank(6, false)).toEqual(1);
    expect(user.dicideRank(5, true)).toEqual(2);
    expect(user.dicideRank(5, false)).toEqual(3);
    expect(user.dicideRank(4, false)).toEqual(4);
    expect(user.dicideRank(3, false)).toEqual(5);
    expect(user.dicideRank(2, false)).toEqual(0);
  });

  test('총 받을 금액을 계산하는 기능', () => {
    const user = new User();
    user.hitRanks = [0, 0, 0, 0, 0, 1];
    user.calculateTotalPrize();
    expect(user.prize).toEqual(5000);
  });

  test('수익율을 계산하는 기능', () => {
    const user = new User();
    user.prize = 5000;
    user.amount = 8000;
    user.calcuateReturnOfInvestment();
    expect(user.returnOfInvestment).toEqual('62.5');
  });
});
