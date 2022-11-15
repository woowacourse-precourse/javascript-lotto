const User = require('../src/User');

describe('유저 테스트', () => {
  test('돈으로 로또사기 6000원', () => {
    const user = new User();
    const lottos = user.buyLottos(6000);
    expect(lottos.length).toBe(6);
  });
});
