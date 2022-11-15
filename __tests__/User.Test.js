const User = require('../src/User');

describe('유저 테스트', () => {
  test('로또 구매', () => {
    const user = new User();
    user.buyLottos(10000);
    const userLottos = user.getLottoList();
    expect(userLottos.length).toBe(10);
  });
});
