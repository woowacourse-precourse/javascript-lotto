const User = require('../src/User');

describe('유저 클래스 테스트', () => {
  test('✨ 사용자가 입력한 금액을 반환한다.', () => {
    const user = new User();
    user.setMoney(8000);
    expect(user.getMoney()).toBe(8000);
  });

  test('✨ 사용자가 구매한 로또 개수를 반환한다.', () => {
    const user = new User();
    user.setLottoQuantity(8);
    expect(user.getLottoQuantity()).toBe(8);
  });

  test('✨ 사용자가 구매한 로또 번호를 반환한다.', () => {
    const user = new User();
    user.setLottos([1, 2, 3, 4, 5, 6]);
    expect(user.getLottos()).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
